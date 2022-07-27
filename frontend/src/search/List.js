import { React, useState } from 'react'
import data from "./ListData.json"

export default function List(props) {
    return (
        <ul>
            {data.map((item) => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>
    )
}