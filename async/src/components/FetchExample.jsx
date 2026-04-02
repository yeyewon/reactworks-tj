import { useEffect, useState } from "react"

const FetchExample = () => {

    const [data, setData] = useState([]);

    // useEffect(): 컴포넌트 마운트될 때 한 번만 실행됨
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos/")
            .then(response => response.json()) // json -> js 객체로 변화
            .then(result => {
                setData(result);
                console.log(result); // 객체
            })
        .catch(error => console.log(error));
    }, [])

    return (
        <div>
            <h2>할 일 데이터</h2>
            <ul>
                {data.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
            
        </div>
    )
}

export default FetchExample