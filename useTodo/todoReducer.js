

export const todoReducer = ( initialState = [], action) => {
    
    switch (action.type) {
        case '[TODO] add todo': //casos de uno en el reducer
            return [ ...initialState, action.payload ] //se regresa dependiendo del initialState
        case '[TODO] remove todo':
            return initialState.filter(todo => todo.id !== action.payload);
        case '[TODO] toggle todo':
            return initialState.map(todo => {
                if( todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done,
                    }
                }
                return todo;
            })
            
        default:
            return initialState;
    }
}