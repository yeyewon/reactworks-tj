import { useContext } from "react"
import { UserContext } from "./User"

const UserChild = () => {
    
    const user = useContext(UserContext)

    return (
        <div className="user-child">
            <h2>UserChild 컴포넌트</h2>
            <p>사용자 이름: {user.name}</p>
            <p>사용자 나이: {user.age}</p>
        </div>
    )
}

export default UserChild