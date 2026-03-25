import { useState } from "react"

const InputText = () => {

    const [inputValue, setInputValue] = useState("");

    const handleInputValue = (e) => {
        console.log(e.target.value);
        setInputValue(e.target.value);
    }
    return (
        <div>
            <input 
                type="text"
                placeholder="글자 입력" 
                onChange={handleInputValue}
            />
            <p>입력된 내용: {inputValue}</p>
        </div>
    )
}

export default InputText