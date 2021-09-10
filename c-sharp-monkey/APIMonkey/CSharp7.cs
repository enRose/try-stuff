using System;
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
        public void Better(string name)
        {
            _ = name ?? throw new ArgumentNullException("Name cannot be null");

            Console.WriteLine("Continue processing below");
        }

        public void NotSoGood(string name)
        {
            if (name == null)
            {
                throw new ArgumentNullException("Name cannot be null");
            }

            Console.WriteLine("Continue processing below");
        }
    }
}