// 표현 1
// export default function Dog(props){

//     return (
//         <div>
//             <h2>강아지</h2>
//             <p>품종: {props.breed}</p>
//             <p>나이: {props.age}</p>
//         </div>
//     )
// }

// 표현 2 - 구조분해 할당
// const Dog = (props) => {

//     const {breed, age} = props;

//     return (
//         <div>
//             <h2>강아지</h2>
//             <p>품종: {breed}</p>
//             <p>나이: {age}</p>
//         </div>
//     )
// }

// 표현 3
export default function Dog( {breed , age} ){

    return (
        <div>
            <h2>강아지</h2>
            <p>품종: {breed}</p>
            <p>나이: {age}</p>
        </div>
    )
}