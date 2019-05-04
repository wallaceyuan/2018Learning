import React, {useState, useEffect}  from 'react';

export default function Example() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
    const [age, setAge] = useState(18);
    const [fruit, setFruit] = useState('banana');
    const [todos, setTodos] = useState([{text: 'Learn Hooks'}, {text: 'Learn TS'}]);

    useEffect(()=> {
        console.log(11)
        document.title = `You age is ${age} `;
    })

    useEffect(() => {
        localStorage.setItem('online', ~~localStorage.getItem('online') + 1)
        return () => {
            localStorage.setItem('online', localStorage.getItem('online') - 1)
        };
    });

    const delItem = (index)=> {
        todos.splice(index, index + 1)
        setTodos([...todos])
    }

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <div>
                <p>You age {age}</p>
                <input type="text" onChange={(e)=>setAge(e.target.value)} placeholder="输入姓名"/>
            </div>
            <div>
                <p>You favorite fruit is {fruit}</p>
                <input type="text" onChange={(e)=>setFruit(e.target.value)} placeholder="输入水果名"/>
            </div>
            <div>
                <p>You list</p>
                <ul>
                    {todos.map((d, i)=><li key={d.text}>{d.text}<span onClick={delItem.bind(this,i)}>删除</span></li>)}
                </ul>
                <input type="text" onBlur={(e)=> {
                 setTodos([...todos, {text: e.target.value}])
                 e.target.value = ''
                 }} placeholder="输入列表名"/>
            </div>
            {/*<div>
                <ul>
                    {books.map((d, i)=><li key={d.item}>{d.item}</li>)}
                </ul>
            </div>*/}
            {/*<BooksHasList />*/}
        </div>
    );
}

function useBooksList() {
    const [books, setBooks] = useState(null);
    function fetchData() {
        return fetch('https://easy-mock.com/mock/5c6935131dbe7c1a4f7dd912/lists/list')
            .then(parseJSON)
            .then(data=> {
                return data
            })
    }

    useEffect(()=> {
        fetchData().then(data=> setBooks(data.list))
        return () => {};
    });

    return books
}

function parseJSON(response) {
    return response.json();
}


function BooksHasList() {
    const books = useBooksList()
    return (
        <div>
            <ul>
                {books.map((d, i)=><li key={d.item}>{d.item}</li>)}
            </ul>
        </div>
    )
}