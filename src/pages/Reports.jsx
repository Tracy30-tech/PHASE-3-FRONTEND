import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function Reports() {
    useEffect(()=>{
        fetch(`http://localhost:9292/properties/${id}`)
        .then((r)=>r.json())
        .then((post)=>{
            
        })

    },[])

    const {id} = useParams()
     

    const [formData, setFormData] = useState({
        comment: "",
        star_rating: "",
        property_id:"",
        user_id:""
      })

    function handleSubmit(event) {
        event.preventDefault();
        
        fetch("http://localhost:9292/reviews", 
        {
            method: "POST",
            headers: {
               "Content-Type": "application/json", 
               "Accept": "application/json",
            },
            body: JSON.stringify(formData)
        })
        .then((response)=> response.json())
        .then(data =>{
    
        setFormData("")
        })
    
    
        Swal.fire({
          title: 'Success',
          text: 'Successfully created an acount',
          icon: 'success',
          confirmButtonText: 'Exit',
          confirmButtonColor:"green"
        })
        // console.log(formData);
      }
      
      const handleChange = (event)=> {
 
        setFormData({
            ...formData,
            [event.target.name] : event.target.value
        })
    }
      
      // console.log(formData)
      return (
        <>
          <h1>Give your reviews</h1>
          <form onSubmit={handleSubmit}>
        
          <label htmlFor="user_id">User_id</label>
            <input
                name='user_id'
                type="number"
                id="user_id"
                value={formData.user_id}
                onChange={handleChange}
            />
            
            <label htmlFor="star_rating">Ratings</label>
            <input
                name='star_rating'
                type="number"
                placeholder='Please enter your email'
                id="star_rating"
                value={formData.star_rating}
                onChange={handleChange}
            />

            <label htmlFor="comment"></label>
            <input
                name='comment'
                type="text"
                placeholder='Comment....'
                id="comment"
                value={formData.comment}
                onChange={handleChange}
            />
       <button type="submit" className="btn btn-outline-primary">Update</button>

  </form>
    </>
  );
}

    