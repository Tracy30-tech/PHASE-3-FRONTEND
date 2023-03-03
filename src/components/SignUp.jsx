import React, { useState } from 'react';
import Swal from 'sweetalert2'


// - React Forms: https://reactjs.org/docs/forms.html

function SignUp() {
   const [formData, setFormData] = useState({
    // firstname:"",
    // lastname:"",
    // gender:"male",
    // password: "",
    name: "",
    phone: "",
    email:"",
    // experience:"",
    // category: "paintwork",
    // newsletter: true
  })
 
  function handleSubmit(event) {
    event.preventDefault();
    
    fetch("http://localhost:9292/users", 
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
      // console.log(data)
      // alert ("heloo")

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
  
  function handleChange(event) {
    const key = event.target.id
    const value = event.target.type === "checkbox" ? event.target.checked : event.target.value
    
    setFormData({ 
      ...formData, 
      [key]: value
    })
  }
  
  // console.log(formData)
  
    

  return (
    <>
      <h1>Create an Account</h1>
      <form onSubmit={handleSubmit}>

      {/* <label htmlFor="firstname">First Name</label>
      <input
        name='firstname'
        type="text"
        id="firstname"
        value={formData.firstname}
        onChange={handleChange}
      />

      <label htmlFor="lastname">Last Name</label>
      <input
        name='lastname'
        type="text"
        id="lastname"
        value={formData.lastname}
        onChange={handleChange}
      />

      <label htmlFor="type">Gender</label>
      <select
        name="gender"
        id="gender"
        value={formData.gender}
        onChange={handleChange}
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="non-binary">Non-binary</option>
      </select> */}

      <label htmlFor="name">name</label>
      <input
        name='name'
        type="text"
        id="name"
        value={formData.name}
        onChange={handleChange}
      />

      {/* <label htmlFor="password">Password</label>
      <input
        name='password'
        type="password"
        id="password"
        placeholder='input your password here'
        value={formData.password}
        onChange={handleChange}
      /> */}

      <label htmlFor="phone">Phone Number</label>
      <input
        name='phone'
        type="number"
        id="phone"
        value={formData.phone}
        onChange={handleChange}
      />
      
      <label htmlFor="email"></label>
      <input
        name='email'
        type="email"
        placeholder='Please enter your email'
        id="email"
        value={formData.email}
        onChange={handleChange}
      />

      {/* <label htmlFor="experience"></label>
      <input
        name='experience'
        type="text"
        placeholder='Describe your best creation'
        id="experience"
        value={formData.experience}
        onChange={handleChange}
      /> */}

      {/* <label htmlFor="avatar">Avatar Image</label>
      <input
        type="text"
        id="avatar"
        value={formData.avatar}
        onChange={handleChange}
      />
      <img
        src={formData.avatar || "https://cdn.codespeedy.com/wp-content/uploads/2018/12/avatar1.png"}
        alt="Avatar preview"
      /> */}

      {/* <label htmlFor="category">Choose interest</label>
      <select
        name='category'
        id="category"
        value={formData.category}
        onChange={handleChange}
      >
        <option value="construction">Construction</option>
        <option value="fashion">Fashion</option>
        <option value="paintwork">Paint Work</option>
      </select>

      <label>
        Get Daily Notifications!
        <input
          name='newsletter'
          type="checkbox"
          id="newsletter"
          checked={formData.newsletter}
          onChange={handleChange}
        />
      </label> */}

      <input className="add" type="submit" value="Sign Up"/>


      
      {/* <input type="submit" value="Sign Up" /> */}
    </form>
    </>
  );
}
export  default SignUp