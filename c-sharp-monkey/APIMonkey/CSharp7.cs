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
            var speed = 250;

            if (whatIsYourName == "Monkey King")
            {
                speed = 50;
            }

            await Task.Delay(speed);

            return true;
        }
    }
}
