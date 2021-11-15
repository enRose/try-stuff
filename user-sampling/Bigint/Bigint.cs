using System;
using System.Numerics;

namespace user_sampling.Bigint
{
    public static class Bigint
    {
        static (Guid, BigInteger, BigInteger) Mod_bigint(Guid g)
        {
            var bytes = g.ToByteArray();

            Array.Resize(ref bytes, 17);

            var bigInt = new BigInteger(bytes);

            BigInteger remainder = bigInt % 997;

            return (g, bigInt, remainder);
        }
    }
}
