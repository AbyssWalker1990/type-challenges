/*
  43 - Exclude
  -------
  by Zheeeng (@zheeeng) #easy #built-in #union

  ### Question

  Implement the built-in `Exclude<T, U>`

  > Exclude from `T` those types that are assignable to `U`

  For example:

  ```ts
  type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
  ```

  > View on GitHub: https://tsch.js.org/43
*/

/* _____________ Your Code Here _____________ */

type MyExclude<T, U> = T extends U ? never : T

/* _____________ Test Cases _____________ */


const case1: MyExclude<'a' | 'b' | 'c', 'a'> = 'b' || 'c'
const case2: MyExclude<'a' | 'b' | 'c', 'a' | 'b'> = 'c'
const case3: MyExclude<string | number | (() => void), Function> = 'c' || 4
//@ts-expect-error
const case4: MyExclude<string | number | (() => void), Function> = () => console.log(3)

export default {}

