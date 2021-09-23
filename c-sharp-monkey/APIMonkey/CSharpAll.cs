using System;
using System.Collections.Generic;

namespace APIMonkey
{
    public class Fold_your_knowledge_into_data_so_your_progam_can_be_dumb_1_DictionaryPattern
    {
        public void NotSoGood(string token)
        {
            string weapon = null;

            if (string.Equals(token, "Minoru", StringComparison.OrdinalIgnoreCase))
            {
                weapon = "The Staff Of One";
            }
            else if (string.Equals(token, "Shang Chi", StringComparison.OrdinalIgnoreCase))
            {
                weapon = "The ten rings of the Mandarin";
            }
            else if (string.Equals(token, "Thor", StringComparison.OrdinalIgnoreCase))
            {
                weapon = "Mjolnir";
            }
            else if (string.Equals(token, "Captain Marvel", StringComparison.OrdinalIgnoreCase))
            {
                weapon = "Quantum Bands";
            }
            else if (string.Equals(token, "Odin", StringComparison.OrdinalIgnoreCase))
            {
                weapon = "The Odinsword";
            }
            else if (string.Equals(token, "Snap", StringComparison.OrdinalIgnoreCase))
            {
                weapon = "The Infinity Gauntlet";
            }

            Console.WriteLine(weapon ?? "Bare knuckles"); 
        }

        public void Better(string token)
        {
            var d = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase)
            {
                { "Minoru", "The Staff Of One"},

                { "Shang Chi", "The ten rings of the Mandarin"},

                { "Thor", "Mjolnir"},

                { "Captain Marvel", "Quantum Bands"},

                { "Odin", "The Odinsword"},

                { "Snap", "The Infinity Gauntlet"}
            };

            var weapon = "";

            d.TryGetValue(token, out weapon);

            Console.WriteLine(weapon ?? "Bare knuckles");
        }
    }
}
