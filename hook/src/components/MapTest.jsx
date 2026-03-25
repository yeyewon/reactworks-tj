const MapTest = () => {
    // 배열
    const carts = ["라면", "달걀", "쌀"]

    // 객체
    const products = [
        {id:1, name:"키보드"},
        {id:2, name:"마우스"},
        {id:3, name:"USB"}
    ]
    return (
        <div>
            <h2>Map</h2>
            <ul>
                {carts.map((cart, index) => (
                    <li key={index}>{index+1} {cart}</li>
                ))}
            </ul>
            <br />
            <ul>
                {products.map(product => (
                    <li key={product.id}>{`${product.id} ${product.name}`}</li>
                ))}
            </ul>
        </div>
    )
}

export default MapTest