export const addTodo = (data) => {
    return{
        type: 'ADD_TODO',
        payload: {
            id : Math.random()*1000,
            data: data
        }
    }
}

export const deleteTodo = (id) => {
    return{
        type: 'DELETE_TODO',
        id
    }
}

export const removeTodo = () => {
    return{
        type:'REMOVE_TODO'
    }
}