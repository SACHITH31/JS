# JavaScript Execution Explained (Interpreter + JIT Compiler)

This explains in **very simple English** how JavaScript engines like **V8** run your code.

---

---
# 1. You Write JavaScript Code
Your JS code is plain text:

```js
let a = 10;
let b = 20;
console.log(a + b);
```
---
# 2. Code is Converted Into AST

- The engine parses using the **PARSER** and converts your code to AST (Abstract Syntax Tree).

- AST is just the structured representation of your code.

- If there is a syntax error, the engine stops here, else the AST represents the total code into the structured tree format.

---

# 3. AST → Bytecode

- The engine converts AST into bytecode.

- Bytecode is executed by the interpreter.
---

# 4. Interpreter Executes the Bytecode

- The interpreter (Ignition(the interpreter in V8 engine) in V8):

- executes bytecode line by line

- runs your program immediately
- Example:
    - Run instruction 1
    - Run instruction 2
    - Run instruction 3

---
# 5. Profiler Watches for Hot Code

- While interpreter runs code, the profiler monitors how often each part runs.

- If a part runs MANY times, it becomes hot code.

- Example hot code:
``` js
for (let i = 0; i < 1_000_000; i++) {
  sum += i;
}
```
---
# 6. JIT Compiler Activates (Only for Hot Code)

### When the profiler detects hot code:

- Interpreter stops executing that section.

- JIT compiler compiles that hot bytecode into machine code.

 ### **IMPORTANT:**

- JIT does NOT compile the entire program.

- JIT compiles ONLY the hot code.

---
# 7. Machine Code Runs Fast

- Machine code = real CPU instructions.

- Once the JIT compiler creates machine code:

  - CPU executes it directly

  - It runs MUCH faster than bytecode

- This is why JS gets faster the more it runs.

---

# Full Flow Diagram
``` txt
JS Code (text)
      ↓
Parser → AST
      ↓
Bytecode
      ↓
Interpreter executes bytecode line by line
      ↓
Profiler checks for hot code
      ↓
If hot code:
      ↓
JIT compiler → machine code
      ↓
CPU executes machine code (very fast)

```