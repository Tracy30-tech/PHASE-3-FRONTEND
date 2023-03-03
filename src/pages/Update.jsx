import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'

export default function Update() {
   const [image_url, setImage_url] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [category, setCategory] = useState("")
    const[user_id, setUser_id] = ("")
  
      const {id} = useParams()
  
      useEffect(()=>{
          fetch(`http://localhost:9292/properties/${id}`)
          .then((r)=>r.json())
          .then((post)=>{
              setImage_url(post.image_url)
              setName(post.name)
              setEmail(post.email)
              setCategory(post.category)
              setUser_id(post.user_id)
          })
  
      },[])
  
      function handleSubmit(e)
      {
       e.preventDefault()
  
       fetch(`http://localhost:9292/properties/${id}`,{
          method:"PATCH",
          headers: {"Content-Type":"application/json"},
          body:JSON.stringify({name: name, email:email, category: category, image_url:image_url})
       })
          .then((r)=>r.json())
          .then((post)=>{
    
          Swal.fire({
              title: 'Updated',
              text: 'Successfully updated',
              icon: 'success',
              confirmButtonText: 'Exit',
              confirmButtonColor:"green"
            })
          }
      )
  
      }
  
  
    return (
      <div className='container my-5'>
        <h3>Update {id}</h3>

        <form onSubmit={handleSubmit}>

        <div className="mb-3">
              <label className="form-label">Image</label>
              <input type="text" className="form-control" value={image_url} onChange={function(e){setImage_url(e.target.value)}} placeholder="Image URL" />
            </div>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" value={name} onChange={function(e){setName(e.target.value)}} placeholder="Name here" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <textarea className="form-control"  rows="3" value={email} onChange={function(e){setEmail(e.target.value)}} placeholder='email'></textarea>
           </div>
           <div className="mb-3">
              <label className="form-label">Category</label>
              <select type="text" className="form-control" value={category} onChange={function(e){setCategory(e.target.value)}} >
                 <option value="construction">Construction</option>
                 <option value="fashion">Fashion</option>
                <option value="paintwork">Paint Work</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">User_id</label>
              <input type="text" className="form-control" value={user_id} onChange={function(e){setUser_id(e.target.value)}} placeholder="User here" />
            </div>
            <button type="submit" className="btn btn-outline-primary">Update</button>
  
         </form>
      </div>
    )
}