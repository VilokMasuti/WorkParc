what broke -> Bug A is Scope/JS syntax (arrow function return).
Bug B is Render (React list keys) + Immutability (your filter removes by id) + Closure (timeouts remember id).