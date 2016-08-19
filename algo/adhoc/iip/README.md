#### Problem - Is It Possible

You are given a pair of integers `(x, y)`. You may perform either of the two operations bellow, in any order, zero or more times.    
   + `(x ,y) -> (x + y, y)`
   + `(x, y) -> (x, y + x)`   

For example, you can start with `(1, 4)` change it to `(5, 4)`, change that to `(5, 9)`, and then change it again to `(5, 14)`. You are given four integers: `a`, `b`, `c`, and `d`. Return `Yes` if it is possible to start with the pair `(a, b)` and end with the pair `(c, d)`. Otherwise, return `No`.   

Method signature: `String isitpossible(int a, int b, int c, int d)`

##### Input Format:  

   + Four integers in separate lines.

##### Constraints:   

   + `1 <= a, b, c, d <= 1000`

##### Output Format:

   + On string `Yes` or `No`
