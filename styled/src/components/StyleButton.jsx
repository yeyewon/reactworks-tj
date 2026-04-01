import styled from "styled-components"

// 버튼 정의
const Button = styled.button`
    padding: 10px 20px;
    margin: 10px;
    font-size: 1rem;
    background-color: #007bff;
    color: #f0f0f0;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover{background-color: #0056b3}
`
// 버튼 컴포넌트 상속 받아서 RoundedButton 생성
// 상속형식: styled(부모컴포넌트)
const RoundedButton = styled(Button)`
    border-radius: 50px;
`

const StyleButton = () => {
    return (
        <>
            <Button>Click Me</Button>
            <RoundedButton>Rounded</RoundedButton>
        </>
    )
}

export default StyleButton