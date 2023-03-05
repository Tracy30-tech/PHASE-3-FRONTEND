import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function Reports() {
    // useEffect(()=>{
    //     fetch(`http://localhost:9292/reviews`)
    //     .then((r)=>r.json())
    //     .then((post)=>{
            
    //     })

    // },[])

    // const {id} = useParams()
     

    const [formData, setFormData] = useState({
        comment: "",
        star_rating: "",
        property_id:"",
        user_id:""
      })


      
  

    function handleSubmit(event) {
        event.preventDefault();

        fetch(`http://localhost:9292/reviews`,
        {
        method:"POST",
        headers: {"Content-Type":"application/json"},
        body:JSON.stringify(formData)
     })
        .then((r)=>r.json())
        .then((post)=>{
        
        
        setFormData("")
        })
    
        let timerInterval
        Swal.fire({
          title: 'Saving review!',
          html: 'Review will be uploaded in <b></b> milliseconds.',
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
              b.textContent = Swal.getTimerLeft()
            }, 100)
          },
          willClose: () => {
            clearInterval(timerInterval)
          }
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
          }
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
            <label htmlFor="property_id">Property_id</label>
            <input
                name='property_id'
                type="number"
                id="property_id"
                value={formData.property_id}
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

    