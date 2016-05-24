# Lexical Environment

Where a variable is declared physically in the code affects how it is represented in memory. Do you think `myVar` can be accessed inside `function a()`? What would happen if you logged `b()` at the end of the file?

<@example samples/lexical-environment/basic-example>

When we call `a()`, `function a()` can access and log the value of `myVar` because it is available in the global context. But if we were to try to call or log `b()`, we would see an error. 