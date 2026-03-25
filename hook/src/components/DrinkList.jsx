const DrinkList = (drinks) => {
    return (
        <div>
            {/* .join() 쉼표 */}
            {/* <p>현재 음료: {drinkName.join()}</p>  */}
            <ul className="drink-list">
                {drinks.map((drink,index) => (
                    <li key={index}>{drink}</li>
                ))}
            </ul>
        </div>
    )
}

export default DrinkList