
const Event = () => {
    // 함수 참조 방식(외부)
    const handleClick = () => {
        alert('클릭되었습니다')
    }

    // 폼 요소
    const handleChange = (event) => {
        //console.log(event)
        console.log(event.target.value);
        
    }
    return (
        <div>
            <h2>이벤트 핸들링</h2>
            {/* 인라인 핸들러-함수 직접 생성 */}
            {/* <button onClick={() => alert('클릭되었습니다')}>클릭하세요</button> */}
            <button onClick={handleClick}>클릭하세요</button> <br />

            <input type="text" onChange={handleChange} />
        </div>
    )
}

export default Event;