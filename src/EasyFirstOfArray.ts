/*
  14 - First of Array
  -------
  by Anthony Fu (@antfu) #easy #array

  ### Question

  Implement a generic `First<T>` that takes an Array `T` and returns its first element's type.

  For example:

  ```ts
  type arr1 = ['a', 'b', 'c']
  type arr2 = [3, 2, 1]

  type head1 = First<arr1> // expected to be 'a'
  type head2 = First<arr2> // expected to be 3
  ```

  > View on GitHub: https://tsch.js.org/14
*/

type First<T extends unknown[]> =
    T extends []
    ? never
    : T[0]

/* _____________ Test Cases _____________ */

const case1: First<[3, 2, 1]> = 3
const case2: First<[() => 123, { a: string }]> = () => 123
const case3: First<[undefined]> = undefined

// @ts-expect-error
First<'notArray'>
// @ts-expect-error
First<{ 0: 'arrayLike' }>

