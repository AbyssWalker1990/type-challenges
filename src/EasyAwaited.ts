/*
  189 - Awaited
  -------
  by Maciej Sikora (@maciejsikora) #easy #promise #built-in

  ### Question

  If we have a type which is a wrapped type like Promise, how we can get the type which is inside the wrapped type?

  For example: if we have `Promise<ExampleType>` how to get ExampleType?

  ```ts
  type ExampleType = Promise<string>

  type Result = MyAwaited<ExampleType> // string
  ```

  > This question is ported from the [original article](https://dev.to/macsikora/advanced-typescript-exercises-question-1-45k4) by [@maciejsikora](https://github.com/maciejsikora)

  > View on GitHub: https://tsch.js.org/189
*/

/* _____________ Your Code Here _____________ */


// type MyAwaited<T extends Promise<unknown>> =
//     T extends Promise<infer U>
//     ? U extends Promise<unknown>
//     ? MyAwaited<U>
//     : U
//     : T

type MyAwaited<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U>
    ? U extends PromiseLike<any>
    ? MyAwaited<U>
    : U
    : never

type X = Promise<string>
type Y = Promise<{ field: number }>
type Z = Promise<Promise<string | number>>
type Z1 = Promise<Promise<Promise<string | boolean>>>
type T = { then: (onfulfilled: (arg: number) => any) => any }


const case1: MyAwaited<X> = 'i am string'
const case2: MyAwaited<Y> = { field: 6 }
const case3: MyAwaited<Z> = 'i am string' || 100
const case4: MyAwaited<Z1> = 'i am string' || false
const case5: MyAwaited<T> = 10

// @ts-expect-error
type error = MyAwaited<number>

export default {}
