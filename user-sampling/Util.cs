using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Text.Json;
using System.Threading.Tasks;

namespace user_sampling
{
    public static class Util
    {
        public static async Task<string> CreateSaltAsync(int size = 100)
        {
            var salts = await Util.ReadFromAsync<List<string>>("salt.json");

            if (string.IsNullOrWhiteSpace(salts[0]))
            {
                using var generator = RandomNumberGenerator.Create();

                generator.GetBytes(new byte[size]);

                var s = Math.Abs(BitConverter.ToInt64(new byte[size])).ToString();

                _ = await new string[] { s }.WriteAsJsonToAsync("salt.json");

                return s;
            }
            else
            {
                return salts[0];
            }
        }

        public static async Task<T> ReadFromAsync<T>(string fileName)
        {
            string filePath = GetPathOf($"/{fileName}");

            var jsonStr = await File.ReadAllTextAsync(filePath);

            var r = JsonSerializer.Deserialize<T>(jsonStr);

            return r;
        }

        public static async Task<T> WriteAsJsonToAsync<T>(this T obj, string fileName)
        {
            string filePath = GetPathOf($"/{fileName}");

            string jsonString = JsonSerializer.Serialize(obj);

            await File.WriteAllTextAsync(filePath, jsonString);

            return obj;
        }

        public static async Task WriteLinesTo(this IEnumerable<string> lines, string fileName)
         => await File.WriteAllLinesAsync(GetPathOf($"/{fileName}"), lines);
        
        public static string GetPathOf(string fileName)
            => Directory.GetParent(Environment.CurrentDirectory)
                .Parent.Parent.FullName + $"/{fileName}";

        public static List<Guid> GenGuids(int num = 1000) =>
            Enumerable.Range(1, num).Select(x => Guid.NewGuid()).ToList();

        public static void AddOrUpdateAppSetting<T>(string key, T value)
        {
            try
            {
                var filePath = GetPathOf("appsettings.json");

                string json = File.ReadAllText(filePath);

                dynamic jsonObj = Newtonsoft.Json.JsonConvert.DeserializeObject(json);

                jsonObj[key] = value;

                string output = Newtonsoft.Json.JsonConvert.SerializeObject(
                    jsonObj, Newtonsoft.Json.Formatting.Indented);

                File.WriteAllText(filePath, output);
            }
            catch (Exception ex)
            {
                Console.WriteLine(
                $"{ex} Error writing app settings");
            }
        }

        public static async Task DrawAsync(
            this Dictionary<Guid, Tuple<string, string>> bucket,
            string fileName
            )
        {
            var bars = new Dictionary<string, int>();

            bucket.Values.ToList().ForEach(x => {

                if (!bars.TryAdd(x.Item2, 1))
                {
                    bars[x.Item2] = bars[x.Item2] + 1;
                }

            });

            var lines = bars.OrderBy(b => Convert.ToInt32(b.Key))
                .Select(bar => $"{bar.Key}: {bar.Value.ToDashBar()} {bar.Value}");

            await lines.WriteLinesTo(fileName);
        }

        public static string ToDashBar(this int v)
            => Enumerable
            .Range(0, v).Select(x => "-")
            .Aggregate(((partialPhrase, word) => $"{partialPhrase} {word}"));
    }
}
