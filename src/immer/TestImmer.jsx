import produce from 'immer'

const TestImmer = (props) => {
    const todos = [
        {
            id: 1,
            text: 'learn immer',
            done: false
        },
        {
            id: 2,
            text: 'simplify all code',
            done: false
        }
    ]


    const nextTodos = produce(todos, draft => {
        draft.push({ id: 3, text: 'get coffee', done: true })
        draft[0].text = 'something else'
    })


    console.log(">>> check todo: ", todos, 'check nextTodos: ', nextTodos)
    return (
        <></>
        // <div>Test immer: </div>
    )
}

export default TestImmer;