# Unhandled Division by Zero Bug in JavaScript

This repository demonstrates a common error in JavaScript: unhandled division by zero.  The `bug.js` file contains a function that fails when the divisor is zero. The `bugSolution.js` demonstrates a corrected version.

## Bug Description

The function `foo` in `bug.js` attempts to divide `a` by `b`.  However, it does not check for the case where `b` is zero, resulting in a runtime error. 

## Solution

The `bugSolution.js` file shows the corrected function, which uses a conditional statement to handle the case where `b` is zero, preventing the error.