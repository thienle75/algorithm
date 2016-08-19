#### Problem - HackLand Election

There are `N` citizens voting in this year's HackLand Election. Each voter writes the name of their chosen candidate on a ballot and places it in a ballot box. The candidate with highest number of votes wins the election; if two or more candidates have same number of votes, then the candidate with lexicographically largest (i.e alphabetically last) name wins.   

Complete the `electionWinner` function in your editor which takes an array of string, `names`, describing the votes in the ballot box. This function must review these votes and return a string representing the name of the winning candidate.

##### Input Format:   
The first line contains an integers, `N`, the size of the `names` array. Each line `i` (where `0 <= i < N`) of the N subsequent lines contains a citizen's vote in the form of a candidate's name.

##### Constraints:   

   + `1 <= N <= 10^4`

##### Output Format:

   + Your function must return the name of the winner.
