using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Numerics;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;

namespace user_sampling
{
    class Program
    {
        public static IConfigurationRoot config;
        public static string salt;

        static async Task Main(string[] args)
        {
            BuildConfig();

            salt = config["Salt"];

            if (string.IsNullOrWhiteSpace(salt))
            {
                salt = Util.GetSalt().ToString();

                Util.AddOrUpdateAppSetting("Salt", salt);
            }

            var guids = await Util.ReadFromAsync<List<Guid>>("guids.json");

            var bucket = Bucket(Mod_md5, guids);

            var t1 = bucket.WriteAsJsonToAsync("bucket-md5.json");

            var t2 = bucket.DrawAsync("bar-md5.txt");

            await Task.WhenAll(t1, t2);
        }

        static void BuildConfig()
        {
            // Build configuration
            config = new ConfigurationBuilder()
                .SetBasePath(Directory.GetParent(AppContext.BaseDirectory).FullName)
                .AddJsonFile("appsettings.json", false)
                .Build();
        }

        static Dictionary<Guid, Tuple<string, string>> Bucket(
            Func<Guid, (Guid, BigInteger, BigInteger)> modFunc,
            List<Guid> guids)
        {
            var buckets = new Dictionary<Guid, Tuple<string, string>>();

            guids.ForEach(g => {
                var (k, n, m) = modFunc(g);

                buckets.Add(k, new Tuple<string, string>(n.ToString(), m.ToString()));
            });

            return buckets;
        }

        static (Guid, BigInteger, BigInteger) Mod_bigint(Guid g)
        {
            var bytes = g.ToByteArray();

            Array.Resize(ref bytes, 17);

            var bigInt = new BigInteger(bytes);

            BigInteger remainder = bigInt % 997;

            return (g, bigInt, remainder);
        }

        static (Guid, BigInteger, BigInteger) Mod_md5(Guid g)
        {
            var hashedGuid = g.ToString().ToMD5(salt); 

            BigInteger remainder = hashedGuid % 997;

            return (g, hashedGuid, remainder);
        }
    }
}