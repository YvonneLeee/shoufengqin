import React, { useState } from 'react'
import './ExampleA.css'

export default function ExampleA() {

    const [current, setCurrent] = useState(0)

    return (
        <div className='container'>
            <ul >
                {[1, 2, 3, 4].map((item, index) => {
                    return <li
                        onMouseEnter={() => {
                            setCurrent(index)
                        }}
                        key={item}
                        className={`item ${current === index ? "active" : ""}`}></li>
                })}
            </ul>
        </div>
    )
}
