# learning-ts

repo includes different approaches for typing things. Also useful as a quick look-up for certain use cases. Also it will include basic JS knowledge, e.g. closures, hoisting, memoraziation and event-loop.

## structure

root
+-- src
    +-- interfaces
    +-- types
    +-- lessons

- interfaces - includes all interfaces used through the repo
- types - includes all types used through the repo
- lessons - different use-cases and tests of typing

## TS/JS in depth

### Closure

When return a function **fn1** from another function **fn2**, all declared variables in the lexical scope will be returned implicitly as **Persistend Lexical Scope References**. But only if the variables itself will **not** get returned.
The process of creating the **Persistend Lexical Scope References** to a varible is called **closing over** the varibale with the function declaration => closure.

It is possible to create a private and public API, module pattern implementations, memorization or function that will run only one time.
