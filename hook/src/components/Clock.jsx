import { useEffect, useState } from "react"

export default function Clock() {

    // useState 시간 초기화 new Date().toLocaleTimeString()
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        },1000);
        console.log('렌더링')
        return () => clearInterval(timer);
    },[])

    return (
        <div>
            <h2>디지털 시계</h2>
            <p>현재 시간: {time}</p>
        </div>
    )
}