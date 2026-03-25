import { useState } from "react"
import DrinkList from "./DrinkList";

const AddDrink = () => {
    // 음료를 저장할 상태 변수와 함수
    const [drinkName, setDrinkName] = useState([]);

    // 입력필드 상태를 관리하기 위한
    const [inputValue, setInputValue] = useState("");

    const handleInputValue = (e) => {
        console.log(e.target.value);
        setInputValue(e.target.value);
    }

    // 음료 추가
    const handleAddDrink = () => {
        const newDrink = inputValue.trim();
        if(newDrink === ""){
            alert("음료 이름을 입력해주세요")
            return;
        }
        setDrinkName( [...drinkName, newDrink] )
        setInputValue("") // 입력필드 초기화 
    }

    return (
        <div>
            <input 
                type="text" 
                placeholder="음료 이름"
                value={inputValue} // 입력필드 초기화
                onChange={handleInputValue}
            />
            <button onClick={handleAddDrink}>음료 추가</button>
            {/* drinkName 전달 */}
            <DrinkList drinks={drinkName} />
        </div>
    )
}

export default AddDrink