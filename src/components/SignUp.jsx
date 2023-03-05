import React, { useState } from 'react';
import Swal from 'sweetalert2'
import 'animate.css';


// - React Forms: https://reactjs.org/docs/forms.html

function SignUp() {
  const[users,setUsers]=useState(33)

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


//npm install animate.css --save
//import 'animate.css';
    Swal.fire({
      title: 'Account Created Successfully',
      text: 'Make sure to verify membership to get you user_id!',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })

  }
  
  function handleChange(event) {
    const key = event.target.id
    const value = event.target.type === "checkbox" ? event.target.checked : event.target.value
    
    setFormData({ 
      ...formData, 
      [key]: value
    })
  }

  function handleClick(){
    setUsers(users+1);
   };
  // console.log(formData)
  
    

  return (
    <>
      <div className="users">user_id 👥:{users}</div>
      <button className="verify" onClick={handleClick}>Verify membership</button>
      <h1>Create an Account</h1>
      <form onSubmit={handleSubmit}>

      <label htmlFor="name">name</label>
      <input
        name='name'
        type="text"
        id="name"
        value={formData.name}
        onChange={handleChange}
      />

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

      <input className="add" type="submit" value="Sign Up"/>


      
      {/* <input type="submit" value="Sign Up" /> */}
    </form>
    </>
  );
}
export  default SignUp