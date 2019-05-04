/**
 * Created by yuanyuan on 2019/2/17.
 */
import React, {useState, useEffect}  from 'react';

export default function useTodoListStatus() {
    const [isDone, setIsDone] = useState(null);
    useEffect(() => {
        localStorage.setItem('online', ~~localStorage.getItem('online') + 1)
        return () => {
            localStorage.setItem('online', localStorage.getItem('online') - 1)
        };
    });
    return isDone
}


function ToDOListItem(props) {
    const isDone = useTodoListStatus(props.todo.id);
    return (
        <li style={{color: isDone ? 'green' : 'black'}}>
            {props.todo.text}
        </li>
    );
}

