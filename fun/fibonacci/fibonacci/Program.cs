using System;
using System.Collections.Generic;
using System.Linq;

namespace fibonacci
{
    public class Program
    {
        static void Main(string[] args)
        {
            var r = Fibonacci.Gen(10);

            r.ToList().ForEach(Console.WriteLine);
        }
    }

    public class Fibonacci
    {
        public static IEnumerable<int> Gen(int num)
        {
            var sequence = new List<int> {0, 1};

            if (num < 3)
            {
                return sequence.ToArray()[0..num];
            }

            Enumerable.Range(1, num).ToList().ForEach(i => {
                var next = sequence[i - 1] + sequence[i];

                sequence.Add(next);
            });

            return sequence;
        }
    }
}
