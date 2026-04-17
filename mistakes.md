what broke -> Bug A is Scope/JS syntax (arrow function return).
Bug B is Render (React list keys) + Immutability (your filter removes by id) + Closure (timeouts remember id).

why broke ->  setToasts((pre) => [...pre, NewToast].slice(-Max_Toasts))
to this (breaks):

JavaScript

setToasts((pre) => { [...pre, NewToast].slice(-Max_Toasts) })
In JavaScript, an arrow function has two forms:

Expression body (no braces) → it returns automatically
(pre) => someValue

Block body (with braces) → you must write return
(pre) => { return someValue }

So when you used braces, you created a block, but you didn’t return anything. That means the function returns undefined. React then sets your state to undefined. Next render, toasts.map(...) crashes or shows nothing because toasts is not an array anymore.

If you insist on braces, this is the correct form:

JavaScript

setToasts((pre) => {
  return [...pre, NewToast].slice(-Max_Toasts)
})
That’s the entire reason.

Bug B: why does id = 1 cause “only one toast” / weird behavior?
Because id must be unique for three separate reasons:

1) React keys
You render:

React

toasts.map(toast => <div key={toast.id}>...</div>)
If every toast has id = 1, then every item has the same key. React uses keys to decide “which DOM element belongs to which item.” Same key means React thinks it’s the same item again and again, so UI behaves like only one.

2) Your delete logic removes by id
Your remove function is:

JavaScript

filter((p) => p.id !== id)
If all toasts have id = 1, then calling removeToast(1) removes all toasts in one shot. That’s why it disappears “too fast” or clears everything.

3) Auto-dismiss closures also use id
Each setTimeout(() => removeToast(id), 3000) remembers the id. If all ids are 1, then all timeouts remove the same target. So again, everything gets wiped.

That’s why unique id isn’t a “nice to have.” It’s required for correctness.









mistakes.md (6 lines):

Bug: clicking inside closed modal (bubbling)
Why: event bubbled to overlay
Fix: stopPropagation
Bug: Escape listener leak (if no cleanup)
Why: listener persists
Fix: removeEventListener in cleanup
