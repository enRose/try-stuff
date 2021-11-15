using System;
using System.Numerics;
using System.Security.Cryptography;
using System.Text;

namespace user_sampling
{
    public static class MD_5
    {
        public static (Guid, BigInteger, BigInteger) Split_md5(
            Guid g, string salt, int modulo)
        {
            var hashedGuid = g.ToString().HashMD5(salt);

            BigInteger remainder = hashedGuid % modulo;

            return (g, hashedGuid, remainder);
        }

        public static long HashMD5(
            this string input,
            string salt = "donkiLovesCheeseC1ke")
        {
            using MD5 md5 = MD5.Create();

            byte[] inputBytes = Encoding.ASCII.GetBytes(salt + input);

            byte[] hashBytes = md5.ComputeHash(inputBytes);

            var computedHash = BitConverter.ToInt64(hashBytes, 0);

            return Math.Abs(computedHash);
        }
    }
}
