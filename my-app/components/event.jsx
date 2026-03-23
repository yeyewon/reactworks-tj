const Event = () => {
    // 함수 참조 방식(외부)
    const handleClick = () => {
        alert('클릭되었습니다')
    }

    // 폼 요소
    const handleChange = (e) => {
        //console.log(e)
        console.log(e.target.value);
        
    }

    // 절대값 계산 함수
    const handleMyAbs = (x) => {
        if(x < 0) {
            console.log(x * -1);
        }else{
            console.log(x);
        }
    }
    
    return (
        <div>
            <h2>이벤트 핸들링</h2>
            {/* 인라인 핸들러-함수 직접 생성 */}
            <button onClick={ () => alert('클릭되었습니다') }>클릭하세요</button>

            <button onClick={handleClick}>클릭하세요</button> <br />

            <button onClick={ () => handleMyAbs(-5) }>결과</button>

            {/* 폼 요소와 이벤트 핸들링-입력 이벤트 */}
            <input type="text" onChange={handleChange} />
        </div>
    )
}

export default Event;