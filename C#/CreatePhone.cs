public class Kata
{
  public static string CreatePhoneNumber(int[] numbers)
  {
    return long.Parse(string.Concat(numbers)).ToString("(000) 000-0000");
  }
}

using System.Linq;
public class Kata
{
  public static string CreatePhoneNumber(int[] numbers)
  {
    return string.Format("({0}{1}{2}) {3}{4}{5}-{6}{7}{8}{9}",numbers.Select(x=>x.ToString()).ToArray());
  }
}

using System;
using System.Text.RegularExpressions;

public class Kata
{
  public static string CreatePhoneNumber(int[] numbers) =>
    new Regex("(...)(...)(....)").Replace(String.Concat(numbers), "($1) $2-$3");
}
