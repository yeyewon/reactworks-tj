import { useState } from "react"

const Like = () => {
    // const [변수, 함수]
    const [count, setCount] = useState(0);

    const likeClick = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <button onClick={likeClick}>좋아요 1</button> {count}

            <button onClick={ ()=>setCount(count+1) }>좋아요 2</button> {count}
        </div>
    )
}

export default Like