using System;
using System.Threading.Tasks;

namespace APIMonkeyCSharp7
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
        public void DoStuff()
        {
            // inlined_variable_declaration = true
            if (int.TryParse("1", out int x))
            {
                Console.WriteLine(x);
            }

            // inlined_variable_declaration = false
            int y;
            if (int.TryParse("1", out y))
            {
                Console.WriteLine(y);
            }
        }
    }
}
