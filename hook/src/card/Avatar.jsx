export default function Avatar( {person, size} ) {
    return (
        <div className="avatar">
            <img 
                src={person.imgUrl} 
                alt={person.name}
                width={size.width}
            />
        </div>
    )
}