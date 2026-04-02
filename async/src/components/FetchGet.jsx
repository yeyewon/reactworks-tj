import { useEffect, useState } from "react"

function FetchGet() {

    const [users, setUsers] = useState([])

    // users.json() 모든 데이터 가져오기
    useEffect(() => {
        fetch("/json/users.json")
            .then(response => response.json()) // json -> js 객체로 변환
            .then(data => {
                console.log("데이터 가져오기 성공", data);
                setUsers(data)
            })
            .catch(err => console.log("오류", err))
    }, [])

    return (
        <div>
            <h2>회원 목록</h2>
            {/* <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}, {user.address.city}</li>
                ))}
            </ul> */}
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>이름</th>
                        <th>도시</th>
                        <th>이메일</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.address.city}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default FetchGet