import Avatar from "./Avatar";
import myPhoto from "../assets/person.jpg"
import Card from "./Card";

export default function Profile() {
    return (
        <div>
            <h2>나의 프로필</h2>
            <Card> 
                <Avatar
                    size = {{
                        width: "300px"
                    }}
                    person = {{
                        name: "정예원",
                        imgUrl: myPhoto
                    }}
                />
            </Card>
        </div>
    )
}