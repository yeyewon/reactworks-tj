const Example01 = () => {
    const isLogin = true;

    return (
        <div>
            <h2>조건부 랜더링</h2>
            {isLogin ? <p>로그인 상태입니다</p> : <p>로그아웃 상태입니다</p>}

            {isLogin && <p>로그인 상태입니다</p>}
        </div>
    )
}

export default Example01