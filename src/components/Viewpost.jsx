import React, { useState,useEffect } from "react"
import { useParams } from 'react-router-dom'


export default function Viewpost() {
    const {id}= useParams()
    const [item, setItem]= useState({})

    useEffect(()=>{
        fetch(`http://localhost:9292/properties/${id}`)
        .then((r)=>r.json())
        .then((post)=>{
            setItem (post)
        })

    },[])


    return (
    <div className="viewpost">
        <img src= {item.image_url} alt={item.name} />
    <div> 
        <p className="card-text">Owner: {item.name}</p>
        <p className="card-text">Category: {item.category}</p>
        <p className="card-text">Email: {item.email}</p>
    </div>
    </div>
    )
}