﻿using System;

namespace Packt_FirstConsoleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("What's your name");
            string name = Console.ReadLine();
            Console.WriteLine("Hello, " + name);
            Console.ReadLine();
        }
    }
}
