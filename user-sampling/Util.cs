using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace user_sampling
{
    public static class Util
    {
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

        public static long ToMD5(
            this string input,
            string salt = "donkiLovesCheeseC1ke")
        {
            using MD5 md5 = MD5.Create();

            byte[] inputBytes = Encoding.ASCII.GetBytes(salt + input);

            byte[] hashBytes = md5.ComputeHash(inputBytes);

            var computedHash = BitConverter.ToInt64(hashBytes, 0);

            return Math.Abs(computedHash);
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
    }
}
