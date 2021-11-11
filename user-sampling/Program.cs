using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using System.Threading.Tasks;

namespace user_sampling
{
    class Program
    {
        static async Task Main(string[] args)
        {
            var guids = await Util.ReadFromAsync<List<Guid>>("guids.json");

            var bucket = Bucket(Mod_bigint, guids);

            var t1 = bucket.WriteAsJsonToAsync("bucket-bigint.json");

            var t2 = bucket.DrawAsync("bar-bigint.txt");

            await Task.WhenAll(t1, t2);
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
            var hashedGuid = g.ToString().ToMD5(); 

            BigInteger remainder = hashedGuid % 997;

            return (g, hashedGuid, remainder);
        }
    }
}