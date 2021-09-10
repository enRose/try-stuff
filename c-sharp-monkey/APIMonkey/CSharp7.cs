using System.Threading.Tasks;

namespace APIMonkey
{
    public class CSharp7
    {
        public CSharp7()
        {
        }

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
}
