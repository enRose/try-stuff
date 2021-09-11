using System;

namespace NetCore3x_NetStandard21_CSharp8
{
    public class NullCoalescingOperatorWithTypeParameters
    {
        private static void Display<T>(T a, T backup)
        {
            Console.WriteLine(a ?? backup);
        }
    }
}
