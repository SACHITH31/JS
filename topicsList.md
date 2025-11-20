# Welcome To JS😁.
#### Here we will complete total JS in this repo.

---
1. how JS executes in the engines like **V8 ENGINE**
2. about the REPL in JS 
    - In JavaScript, the browser console acts as a REPL.
    - Browser Console is an tool in the DEV TOOLS.
3. history of JS
    - JS was created by **BRENDAN EICH** in 1995 who worked in Netscape Communications Corporation Compamy.
    - Names are: **MOCHA -> LIVESCRIPT -> JAVASCRIPT**.
4. data types in JS:
    1. Primitive data types:
        - Number
        - String
        - Boolean
        - Null
        - Undefined
        - Symbol (ES6)
        - BigInt (ES11)
    2. Non-Primitive data types:
        - Object
        - Array
        - Function
        - Date
    3. Special data types:
        - NaN
        - Infinity
    - typeof operator: 
        - used to know the data type of a variable or value.
5. debugger: GOTO DEV TOOLS -> SOURCES -> ADD BREAKPOINTS (or) add 'debugger' in .js code only -> REFRESH THE PAGE. -> STACK 
6. comments in JS:
    - single line comment: //
    - multi line comment: /* */
7. temporal dead zone: (in simple terms of english)
    - TDZ is a behavior in JavaScript where variables declared with let and const cannot be accessed before their declaration in the code. 
    - This period between the start of the block and the actual declaration is known as the temporal dead zone. During this time, if you try to access the variable, it will result in a ReferenceError.
    Example:
    ```javascript
    console.log(x); // ReferenceError: Cannot access 'x' before initialization
    let x = 10;
    ```
    - Here we are trying to access x before its declaration results in a ReferenceError because x is in the temporal dead zone until the line let x = 10; is executed.
8. dialg boxes in JS:
    - alert(): to show the message to the user.
    - prompt(): to take the input from the user.
    - confirm(): to get the confirmation from the user.