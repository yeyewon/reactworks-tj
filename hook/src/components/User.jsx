import { useEffect, useState } from "react"

export default function User() {

    const [username, setUserName] = useState("");
    const [age, setAge] = useState(0);

    // [] 빈배열, 처음 한번만 실행됨
    // [username]만 렌더링됨
    useEffect(() => {
        console.log('렌더링')
    },[username])

    const onChangeName = (e) => {
        setUserName(e.target.value);
    }
    const onChangeAge = (e) => {
        setAge(Number(e.target.value));
    }
    return (
        <div>
            <h2>사용자 정보</h2>
            <input 
                type="text"
                value={username} 
                onChange={onChangeName}
            />
            <input 
                type="number" 
                value={age}
                onChange={onChangeAge}
            />
            <p>이름: {username}</p>
            <p>나이: {age}</p>
        </div>
    )
}