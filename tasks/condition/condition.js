//conditional

/** TODO
 * Task - rewrite IF..ELSE to ternary operator
 */
{
  const a = 3;
  const b = 2;

  console.log((a + b < 4) ? 'wrong' : 'too much');
}

/** TODO
 * The system receives two params x and y.
 * Implement the logic when z equal to sum of x and y in case both of them less than 10 or multiplication in case of greater or equal than 10
 * Task 1 - if else
 * Task 2 - ternary operator
 */

//TASK 1
{
  const x = 3;
  const y = 7;
  let z;

  if (x < 10 & y < 10) {
    z = x + y;
  } else if (x >= 10 & y >= 10) {
    z = x * y;
  }
  console.log(z);
}

//TASK 2
{
  const x = 3;
  const y = 7;
  let z;

  z = (x < 10 & y < 10) ? x + y : (x >= 10 & y >= 10 ? x * y : undefined);
  console.log(z);
}

/** TODO
 * The system receives 3 params - x, y, operator.
 * Operator can pass 4 possible values - "add", "subtract", "multiply", "divide".
 * Implement the logic when the system does appropriate operation based on passed operator param.
 */

{
  const x = 3;
  const y = 7;
  const operator = "add";
  let result;

  switch (operator) {
    case "add":
      result = x + y;
      break;
    case "subtract":
      result = x - y;
      break;

    case "multiply":
      result = x * y;
      break;
    case "divide":
      result = x / y;
      break;

    default:
      break;
  }
  console.log(result);
}