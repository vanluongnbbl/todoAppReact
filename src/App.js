import { useStore, actions } from './store'
import {useRef, useState, useEffect} from 'react'
function App() {

  const [state, dispatch] = useStore()
  const [idTodo, setIdTodo] = useState()
  const {todos, todoInput} = state
  const inputRef = useRef()

  useEffect(() => {

  }, [todos])


  const handleSubmit = (e) => {
    if (idTodo) {
      dispatch(actions.editTodoInput(todoInput, idTodo))
      setIdTodo()
    } else {
      dispatch(actions.addTodoInput(todoInput))
    }
    dispatch(actions.setTodoInput(''))
    inputRef.current.focus()
  }

  const handleEdit = (index) => {
    dispatch(actions.setTodoInput(todos[index]))
    setIdTodo(index)
    inputRef.current.focus()
  }

  const handleCancelEdit = () => {
    dispatch(actions.setTodoInput(''))
    setIdTodo()
  }

  return (
    <div className="App">
      <h1>Todo lists</h1>
      <input 
        placeholder="Enter todo..."

        ref={inputRef}
        value={todoInput}
        onChange={e => dispatch(actions.setTodoInput(e.target.value))}
      />
      <button onClick={handleSubmit}>
        {idTodo ? 'Edit' : 'Add'}
      </button>
      {idTodo && <button onClick={handleCancelEdit}>Cancel</button>}

      <ol>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo} - 
              <button onClick={() => handleEdit(index)}>EDIT</button>

              {
              (idTodo === undefined || idTodo !== index) && 
              <button 
                onClick={() => dispatch(actions.deleteTodoInput(index))}
              >
                DELETE
              </button>
              }
            </li>
          )) }
      </ol>
    </div>
  );
}

export default App;
