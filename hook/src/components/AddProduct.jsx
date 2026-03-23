import { useState } from "react"

const AddProduct = () => {
    const [productName, setProductName] = useState("");

    const [products, setProducts] = useState([]);

    // 상품명 상태 변경
    const handleInputChange = (e) => {
        // console.log(e.target.value);
        setProductName(e.target.value)
    }

    // 상품 추가
    const handleAddProduct = () => {
        // 상품 미입력 시 유효성 검사
        // .trim() 공백 없애는 함수
        if(productName.trim() === "") {
            alert("상품 이름을 입력해주세요");
            return
        }

        // id: 고유값 필요, Date.now() 사용
        const newProducts = [...products, {id: Date.now(), name:productName}]
        console.log("상품목록:", newProducts);
        setProducts(newProducts);
    }

    // 상품 삭제
    const handleDeletProduct = (id) => {
        // .filter() 삭제할 상품을 제외하고 남김
        setProducts(products.filter(product => product.id !== id))
    }

    return (
        <>
            <div>
                <h2>상품 추가</h2>
                <input 
                    type="text" 
                    placeholder="상품 이름 입력" 
                    // value={productName}
                    onChange={handleInputChange}
                />
                <button onClick={handleAddProduct}>추가</button>
            </div>
            <div className="products">
                <h2>추가된 상품 목록</h2>
                {products.length === 0 
                ? (<p>추가된 상품이 없습니다</p>) 
                : (
                    <ul>
                        {products.map((product)=>(
                            <li key={product.id}> {product.name} 
                                <button 
                                    onClick={() => handleDeletProduct(product.id)}
                                    style={{marginLeft:"10px", color:"red"}}
                                    >삭제
                                    </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    )
}

export default AddProduct