# Hoisting

Before diving into the topic of hoisting, it's good to recall that Javascript executes synchronously: that is, it executes one command at a time and in order.

Now let's consider an example. Generally it's good practice to define functions and variable declarations before using them. Let's say instead, you decide to call a function and log the value of a variable first and place the definition below it. What would you expect to happen?

<@example samples/hoisting/basic-example>

This is a simple example of "hoisting". The term comes from the notion that function definitions and variable declarations are lifted to the top of the file. This makes sense from the result of our function call but what about the result when we logged the variable? What's actually happening is a creation step in the execution context before any code is executed, a first pass to define functions and variables in memory. For functions, it's creating and saving the function definition. For variables, it's creating a reference and setting it to `undefined`. After the creation step, the execution context can begin executing each line of code.

So what happens if we don't declare the variable? Will it still log `undefined`?

<@example samples/hoisting/reference-error>

Nope, we get a ReferenceError. Odd: the message says our variable wasn't defined, isn't that the same as it being `undefined`? Not exactly. In the first example, we declared the variable in the context but referenced it before we had defined it. During the creation step, the variable was set in memory to `undefined` before we later came back and set a value to it. However, in this last example, we didn't declare the variable so when we reference it by trying to log its value, we don't find it and that's why we get the error: it wasn't found in memory.

It's worth briefly pointing out that the execution context only creates its own functions and variables. If a variable is declared inside a function, it is not created until the function is invoked and goes through its creation step.