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
        public static List<Guid> guids;
        public static string salt;

        static async Task Main(string[] args)
        {
            BuildConfig();

            salt = config["salt"];

            guids = await Util.ReadFromAsync<List<Guid>>("guids.json");

            await RunMD5Async();
        }

        static async Task RunMD5Async()
        {
            var canary = new Canary();

            canary.SetSplitFunc(MD_5.Split_md5).SetUserPercentage(10);

            var bucket = canary.Split(guids).Bucket;

            var t1 = bucket.WriteAsJsonToAsync("MD5/bucket.json");

            var t2 = bucket.DrawAsync("MD5/dist.txt");

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
    }
}