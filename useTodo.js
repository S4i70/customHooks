import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useRedurer/todoReducer";

const initialState = [
   
];

const init= () => { //tercera funcion del "reducer" que permite mantener el contenido inicial cuando se agrega algo.
                    // se en este caso se alja en el localstorage.
    return JSON.parse(localStorage.getItem('todos')) || []; // se retonar el todo, con condicion de null.
};


export const useTodo = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, initialState, init);
    

    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify( todos ))
    }, [todos]);

    
    
    const handleNewTodo= (todo) => { // creando la accion para todoReducer
            const action= {
                type: '[TODO] add todo', // con el swich, accedemos al case que esta en el todoReducer
                payload: todo
            }
            dispatch(action);
    };

    const handleDeleteTodo= (id) => {// funcion para borrar un todo, mandado al todoAdd        
        dispatch({ // dispatch creando en el "reducer"
            type: '[TODO] remove todo',
            payload: id
            
        });
    };

    const handleToggleTodo= (todo) => {
        dispatch({
            type: '[TODO] toggle todo',
            payload: todo
        })
    }
    
    const todoCount= todos.length;
    


    return {
        ...todos,
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todoCount,
        todoPendigCount: todos.filter(todo => !todo.done).length,
        
    }
}
