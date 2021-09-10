using System;

namespace APIMonkeyCSharp6
{
    public class ExpressionBodiedMethods
    {
        string _firstName = "Yini";
        string _lastName = "Yin";
        
        public void DoStuff() => Console.WriteLine($"{_firstName} {_lastName}");
    }

    public class ExpressionBodiedReadOnlyProps
    {
        string FirstName => "Yini";
        string LastName => "Yin";
    }
}
