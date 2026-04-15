1) Immutability (correct)
Signal: I am updating React state that is an array/object (add, delete, update one item)


Fix: never mutate (push/splice/direct change). Return a NEW array/object using ..., map, filter.

Micro example (3 lines):
JavaScript
setTasks(prev => prev.filter(t => t.id !== id))           // delete
setTasks(prev => prev.map(t => t.id===id ? {...t, status:'done'} : t)) // update
setTasks(prev => [...prev, newTask])                      // add


2) Render (Derived State) (correct)
Signal: I’m about to store something in state that can be computed from other state (filtered list, counts, grouped lists)

Fix: don’t add extra useState. Compute it during render from the source state.

Micro example (3 lines):
JavaScript
const todo = tasks.filter(t => t.status === 'todo')
const doneCount = tasks.filter(t => t.status === 'done').length
return todo.map(t => <Task key={t.id} {...t} />)