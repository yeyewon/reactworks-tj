import { useState } from "react"
import axios from "axios"

const AxiosPost = () => {

    // 할 일 저장 상태 관리
    const [title, setTitle] = useState("")

    // 입력 필드 변경 시 상태 업데이트
    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    // 폼 제출 핸들러
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/todos/", {
            title: title,
            completed: false
        })
        .then(res => {
            console.log('생성된 데이터', res.data);
            alert("등록 완료")
            setTitle(""); // 입력 필드 초기화
        })
        .catch(err => console.log(err))
    }
    
    return (
        <div>
            <h2>할 일 관리</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="할 일을 입력해주세요"
                    value={title}
                    onChange={handleChange}
                />
                <button type="submit">등록</button>
            </form>
        </div>
    )
}

export default AxiosPost