import { useState } from "react"
import styled from "styled-components"

// 컴포넌트 스타일 정의
const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
    padding: 40px;
    background-color: lightgray;
    height: 100vh;
`
const Block = styled.div`
    width: 100px;
    height: 100px;
    background-color: ${(props => props.color)};
    border-radius: 8px;
    cursor: pointer;
`

const Blocks = () => {

    const [clicked, setClicked] = useState(null)

    const handleClick = (color) => {
        setClicked(color)
    }
    return (
        <Wrapper>
            <Block color="green" onClick={() => handleClick("green")} />
            <Block color="blue" onClick={() => handleClick("blue")} />
            <Block color="red" onClick={() => handleClick("red")} />
            {clicked && <p>클릭한 색상: {clicked}</p>}
        </Wrapper>
    )
}

export default Blocks