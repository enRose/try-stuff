using System;
using System.Collections.Generic;
using System.Numerics;

namespace user_sampling
{
    public class Canary
    {
        public const int modulo = 997;

        public string Salt { get; set; }

        public int Percentage { get; set; }

        public Func<Guid, string, int, (Guid, BigInteger, BigInteger)> SplitFunc { get; set; }

        public Dictionary<Guid, Tuple<string, string>> Bucket { get; set; } =
            new Dictionary<Guid, Tuple<string, string>>();

        public Canary SetSplitFunc(Func<Guid, string, int, (Guid, BigInteger, BigInteger)> f)
        {
            SplitFunc = f;

            return this;
        }

        public Canary SetUserPercentage(int p = 10)
        {
            Percentage = p;

            return this;
        }

        public Canary Split(Guid userId)
        {
            var (k, n, m) = SplitFunc(userId, Salt, modulo);

            Bucket.Add(k, new Tuple<string, string>(n.ToString(), m.ToString()));

            return this;
        }

        public Canary Split(List<Guid> guids)
        {
            guids.ForEach(g => {
                var (k, n, m) = SplitFunc(g, Salt, modulo);

                Bucket.Add(k, new Tuple<string, string>(n.ToString(), m.ToString()));
            });

            return this;
        }

        public bool IsInUserCohort(Guid userId)
        {
            if (Bucket.TryGetValue(userId, out Tuple<string, string> v))
            {
                return Convert.ToInt32(v.Item2) <= modulo * (Percentage / 100);
            }

            return false;
        }
    }
}
