import { useState } from "react"

// 임시 데이터
const TEMP_USERS = [
    {username: "admin", password: "00000"},
    {username: "cloud", password: "c1234"},
    {username: "tester", password: "tester"}
]

const SignIn = () => {

    const [userId, setUserId] = useState("")
    const [password, setPassword] = useState("")

    // 로그인 결과 처리
    // 초기상태:null, 로그인 성공:success, 실패:fail
    const [result, setResult] = useState(null)

    // ID 입력처리
    const handleChangeUserId = (e) => {
        setUserId(e.target.value)
    }

    // 비밀번호 입력
    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    // 폼 제출
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`ID: ${userId}`);
        console.log(`비밀번호: ${password}`);

        // 로그인 처리
        // 외부에서 입력된 아이디, 비번을 임시 데이터에서 비교
        // .find()
        const matched = TEMP_USERS.find(
            (user) => user.username === userId && user.password == password
        );
        if(matched){
            setResult('success');
            console.log(`성공: ${userId}님 환영합니다`)
        }else{
            setResult('fail');
            console.log('로그인실패')
        }
    }

    return (
        <div>
            <h2>로그인</h2>
            <form onSubmit={handleSubmit}>
                <p>
                    <input 
                        type="text" 
                        placeholder="ID 입력"
                        value={userId}
                        onChange={handleChangeUserId}
                    />
                </p>
                <p>
                    <input 
                        type="password" 
                        placeholder="비밀번호 입력"
                        value={password}
                        onChange={handleChangePassword}
                    />
                </p>
                {/* form전송 시 type="submit */}
                <button type="submit">로그인</button>
            </form>

            {/* 로그인 결과 메시지 */}
            {result === 'success' && (
                <p style={{color: "blue"}}>환영합니다 {userId}님</p>
            )}
            {result === 'fail' && (
                <p style={{color: "red"}}>아이디나 비밀번호가 일치하지 않습니다</p>
            )}
        </div>
    )
}

export default SignIn