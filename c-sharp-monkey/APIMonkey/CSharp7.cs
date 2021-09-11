using System;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace NetFramework_NetStandard1x_20_NetCore2x_CSharp73
{
    public class ExpressionBodiedProps
    {
        private string _name;

        public ExpressionBodiedProps(string n) => Name = n;

        public string Name
        {
            get => _name;
            set => _name = value;
        }
    }

    public class Discards
    {
        public void DoStuff()
        {
            _ = FireForget();
        }

        private async Task<bool> FireForget(string whatIsYourName = "Yini")
        {
            await Task.Delay(whatIsYourName == "Monkey King" ? 50 : 300);

            return true;
        }
    }

    public class InlineVarDeclaration
    {
        public void Better()
        {
            if (int.TryParse("1", out int x))
            {
                Console.WriteLine(x);
            }   
        }

        public void NotSoGood()
        {
            int y;
            if (int.TryParse("1", out y))
            {
                Console.WriteLine(y);
            }
        }
    }

    public class NullCoalescingOperator
    {
        public void BetterThrowError(string name)
        {
            _ = name ?? throw new ArgumentNullException("Name cannot be null");

            Console.WriteLine("Continue processing below");
        }

        public void NotSoGoodThrowError(string name)
        {
            if (name == null)
            {
                throw new ArgumentNullException("Name cannot be null");
            }

            Console.WriteLine("Continue processing below");
        }
    }

    public class NullCoalescingOperatorProvideDefault
    {
        private const string pattern = @"^[0-9A-Z]([-.\w]*[0-9A-Z])*$";

        private const string email = "AAAAAAAAAAaaaaaaaaaa!@RegexDenialOfService.com";


        public void NotSoGood()
        {
            _ = Regex.Match(email, pattern, RegexOptions.IgnoreCase);

            Console.WriteLine("It will take 53.72 minutes to reach here.");
        }

        public void BetterWayToHandleReDOS(int? regexTimeoutInMilliSec)
        {
            try
            {
                const int MAX_TIMEOUT_MILLISECONDS = 2000;

                _ = Regex.Match(email, pattern,
                    RegexOptions.IgnoreCase,
                    TimeSpan.FromMilliseconds(regexTimeoutInMilliSec ?? MAX_TIMEOUT_MILLISECONDS));
            }
            catch(RegexMatchTimeoutException e)
            {
                Console.WriteLine(
                    $"We don't want to regex forever, " +
                    $"so we timed it out after " +
                    $"{e.MatchTimeout.TotalMilliseconds} milliseconds");
            }
        }
    }
}