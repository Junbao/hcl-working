using System;
using System.Collections.Generic;
using System.Text;

namespace Packt_GenericClass
{
	public class MyStack<T>
	{
		private List<T> _list = new List<T>();

		// Pushes 
		public void Push(T value)
		{
			_list.Add(value);
		}

		// check to see if stack is empty - is true if no element in Stack
		public bool IsEmpty()
		{
			return _list.Count == 0;
		}

		//All stack need to have a POP
		public T Pop()
		{
			if (IsEmpty())
			{
				throw new InvalidOperationException("Stack is empty");
			}
			// Get the value at end of list
			T value = _list[_list.Count - 1];
			_list.RemoveAt(_list.Count - 1);
			return value;

		}
	}
}
