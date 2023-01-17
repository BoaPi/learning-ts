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

TS & JS topics in depth, technical concepts, pattern etc.

### General

* `null` => deliberate non-value
* `undefined` => absence of value
* `undefined` can be be obtained by:
  * implizit `return` statement
  * accessing a non-existent object property
  * variable declaration without initialization
* `false`, `0`, `""`, `NaN`, `null` & `undefined` are all `false`
* all other values are `true`
* `let` => block-level variables
* `const` => never intended to change, also block level
* `var` => non-block scoping, surprising behavior and therfor discourage in modern JS/TS

### Objects

* everything in JS is an **object**
* except `null`, `undefined`, `strings`, `numbers`, `boolean`, and `symbols`
* **objects** are hashes and do not have fixed shapes
* properties can be added, deleted, re-ordered, mutated
* object keys are always `string` or `symbol`

### Functions

* frist-class objects
* can be assigned to **variables**, passed as **arguments** and be returned from other functions
* support **closure**

### Arrow Functions

* do not have their own binding to `this`, `arguments` or `super`
* should not be used as methods
* can not be a constructor
* can not use `yield` inside their function body

### Closure

When return a function **fn1** from another function **fn2**, all declared variables in the lexical scope will be returned implicitly as **Persistend Lexical Scope References**. But only if the variables itself will **not** get returned.
The process of creating the **Persistend Lexical Scope References** to a varible is called **closing over** the varibale with the function declaration => closure.

It is possible to create a private and public API, module pattern implementations, memorization or function that will run only one time.

### Event Loop

* contains the **stack**, **heap** and **queue**
* when a function is called, a **frame** is created on the **stack** with references to the functions arguments and local variables
* when a second function inside the first function is called, a new **frame** is created on the **stack** in top of the first **frame**
* when the second function returns, the top-most (related) frame is popped of the stack
* when the first function returns, the top-most (related) frame is popped of the stack
* arguments and varibales may continue to exist, because they are stored outside of the stack (see **Closure**)
* objects are allocated in the **heap**
* the **queue** is a list of **messaages**
* each **message** has an associated function that gets called to handle the **message**
* queue is handled first in first out
* when a **message** get proccessed, it will be removed from the queue and the function call will create a new **frame** on the **stack**
* the processing of the function continues until the **stack** is empty again
* when the **stack** is empty the next message will be proccessed
* this behavior means, that one function can run only
* **messages** will be created and added to the **queue** when an event occurs and there is an eventListener for that event
* `setTimeout()` comes with two arguments, message to add to the queue and optional time value
* time value is the minimum time, after the message will get put into the queue
* if the **stack** is empty, the processing starts
* if the **stack** is not empty, the processing will wait until the **stack** is empty
* that means the time value of `setTimeout` is a minimum and not guranteed
* common case is a time value of `0`
* `0` means not that the **message** will put immediately into the `stack`
* instead is has to wait until all queued **messages** are processed
* `web workers` or cross-origin `iframe` have there own stack, heap and queue.
* communication between those runtimes is possible through `postMessage`
* `postMessage` adds a **message** to the other runtime, if the latter listens to `message` method
* the event loop never blocks
