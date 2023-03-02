import React, { useState,useEffect } from "react"
import { useParams } from 'react-router-dom'


export default function Viewpost() {
    const {itemId}= useParams()
    const [item, setItem]= useState({})

    useEffect(()=>{
        fetch(`http://localhost:3001/properties/${itemId}`)
        .then((r)=>r.json())
        .then((post)=>{
            setItem (post)
        })

    },[])


    return (
    <div className="viewpost">
        <img src= {item.imageUrl} alt={item.name} />
    <div> 
        <p className="card-text">Owner: {item.name}</p>
        <p className="card-text">Category: {item.category}</p>
        <p className="card-text">Email: {item.email}</p>
    </div>
    </div>
    )
}