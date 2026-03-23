import { useState } from "react"

const Car = () => {

    const [car, setCar] = useState({
        brand: "현대자동차",
        model: "소나타",
        year: 2021
    })

    const updateYear = () => {
        // car객체 복사 후 year 속성만 변경
        setCar({...car, year:2015})
    }
    return (
        <div>
            <h2>자동차</h2>
            <p>브랜드: {car.brand}</p>
            <p>모델: {car.model}</p>
            <p>연식: {car.year}</p>
            <button onClick={updateYear}>연식변경</button>
        </div>
    )
}

export default Car