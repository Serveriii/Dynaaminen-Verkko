import React, { useState, useEffect } from "react";

export default function Kello () {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const id = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => {
            clearInterval(id);
        };
    },[])

    return (
        <div className="clock">
            {time.toLocaleTimeString()}
        </div>
    )
}

