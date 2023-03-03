import React, {useState, useEffect} from "react";
import Footer from "../components/Footer";
import Navlink from "../components/Navlink";
import { useHistory} from "react-router-dom";
import  image from "../img/tracy.jpg"

export default function Login() {
  const history = useHistory()
  const [items, setItems] = useState([])
    useEffect(() => {
        fetch("http://localhost:9292/properties")
        .then((response)=> response.json())
        .then((data)=> {
            setItems(data)
        })
    }, [])

    const [formData,setFormData] = useState({ 
      name: "",
      email:"",
      category: "paintwork",
      image_url: "",
      user_id: ""
    })
    const handleSubmit = (event)=>{
        event.preventDefault();
        postItem(formData)

        

    }
    

    const postItem = (property)=> {
        fetch("http://localhost:9292/properties", 
        {
            method: "POST",
            headers: {
               "Content-Type": "application/json", 
               "Accept": "application/json",
            },
            body: JSON.stringify(property)
        })
        .then((response)=> response.json())
        .then(data =>{
            setItems([...items, data])
        })
    }

    const handleOnChange = (event)=> {
 
        setFormData({
            ...formData,
            [event.target.name] : event.target.value
        })
    }


    return(
      <div className="login">
        <div> <Navlink /> </div>
        <img src={image}/>
        <h1 id="form">
         HYDRATECH INOVATIONS DESIGN AND BUILD
        </h1>
        <div className="m-4">
            <form className="row" onSubmit={handleSubmit}>
                    <div className="col-4 mb-3">
                        <input name="name" onChange={handleOnChange} value={formData.name}  className="form-control form-control-sm  py-2" type="text" placeholder="Name here" aria-label=".form-control-sm example"/>
                    </div>
                    <div className="col-4 mb-3">
                        <input name="email" onChange={handleOnChange} value={formData.email}  className="form-control form-control-sm py-2" type="text" placeholder="Email here" aria-label=".form-control-sm example"/>
                    </div>
                    <div className="col-4 mb-3">
                        <select name="category" onChange={handleOnChange} value={formData.category}  className="form-control form-control-sm py-2" type="text" aria-label=".form-control-sm example">
                            <option value="construction">Construction</option>
                            <option value="fashion">Fashion</option>
                            <option value="paintwork">Paint Work</option>
                        </select>   
                    </div>
                    <div className="col-4 mb-3">
                        <input name="image_url" onChange={handleOnChange} value={formData.image_url}  className="form-control form-control-sm py-2" type="text" placeholder="Image URL" aria-label=".form-control-sm example"/>
                    </div>
                    <div className="col-4">
                        <button type="submit" className="verify">Add Item</button>
                    </div>
            </form>
            <div className="row p-4" id="content">
                {
                    items.map((item, index)=> {
                        return(
                            // cannot use link tag twice with 2 onClicks since you will be directed to only command page. Therefore use the useHistory.
                            <div key={index} className="card col-sm-3 m-1" style={{width: "18rem;"}} onClick={()=>{
                                 history.push(`/viewpost/${item.id}`) 
                            }}>
                                <img className="picture" src={item.image_url} class="card-img-top" alt="..."/>
                                <div className="card-body" >
                                    <p className="card-text">Category: {item.category}</p>
                                    <button className="hoverleft" onClick={(e)=>{
                                        e.stopPropagation()
                                        e.preventDefault()
                                        history.push(`/update/${item.id}`)
                                    }}>
                                        Update
                                    </button>
                                    <button className="hover" onClick={(e)=> {
                                        e.stopPropagation()
                                        fetch(`http://localhost:9292/properties/${item.id}`,{
                                            method:"DELETE"
                                        })
                                        .then ((res)=> res.json())
                                        .then(data=>{
                                           setItems(items.filter(array=>{
                                            return array.id !== item.id
                                           }))
                                        })
                                    }}>Delete</button>
                                    {/* <button onClick={handleDelete} className="btn btn-danger">Delete</button> */}


                                </div>
                            </div>
                        )
                    })
                }
                
            </div>
        </div>
        <div> <Footer /></div>
      </div>
    )
}