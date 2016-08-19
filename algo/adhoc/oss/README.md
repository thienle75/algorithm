#### Problem

A non-empty zero-index array `A` consisting of `N` integers is given.   
You can perform a single swap operation in array `A`. This operation takes two indices `i` and `j`, such that `0 <= i <= j <= N`, and exchanges the value of `A[i]` and `A[j]`.   
The goal is to check whether array A can be sorted into non-decreasing order by performing at most one swap operation.    
For example, consider array `A` such that:
```
A[0] = 1
A[1] = 5
A[2] = 3
A[3] = 3
A[4] = 7
```
After exchanging the value `A[1]` and `A[3]` we obtain an array `[1, 3, 3, 5, 7]`, which is sorted in non-decreasing order.

##### Write a function:   
`function solution(N);`   
that, given a non-empty zero-index array `A` consisting of `N` integers, returns `true` if the array can be sorted into non-decreasing order by performing at most one swap operation or `false` otherwise.   

For example, given:
```
A[0] = 1
A[1] = 5
A[2] = 3
A[3] = 3
A[4] = 7
```
the function should return `true`, as explained above. On the other hand, the following array:
```
A[0] = 1
A[1] = 3
A[2] = 5
A[3] = 3
A[4] = 4
```
For the following array:
```
A[0] = 1
A[1] = 3
A[2] = 5
```
the function should return `true`, as the given array is already shorted.
