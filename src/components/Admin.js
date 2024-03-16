import React,{useState,useEffect} from 'react'
import '../index.css'
import './css/Admin.css'
import  axios from 'axios'
export const Admin = () => {
    const[post,setPost]=useState([])
    const[id,setId]=useState()
    const[name,setName]=useState('')
    const[age,setAge]=useState()
    const[img,setImg]=useState()

    useEffect(()=>{
        axios.get('http://localhost:3001/Students')
        .then(res=>setPost(res.data))
        .catch(err=>console.log(err))
    })
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(id == null || name == null || age == null||img==null)
        alert("Enter valid Data")
    else
        axios.post(`http://localhost:3001/Students`,{"id":id,"name":name,"age":age,"image":img})
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err))
    }
    const handleDelete=(id) => {
        axios.delete(`http://localhost:3001/Students/${id}`)
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err))
    }
    const[popup,setPopup]=useState(false)
    const[id1,setId1]=useState()
    const[name1,setName1]=useState('')
    const[age1,setAge1]=useState()
    const[img1,SetImg1]=useState()


    const openpopup=(datas)=>{
        setPopup(true)
        setId1( datas.id)
        setName1( datas.name)
        setAge1(datas.age)
        SetImg1(datas.image)

    }
    let handleupdate = () =>{
        axios.put(`http://localhost:3001/Students/${id1}`,{
            "id":id1,
            "name":name1,
            "age":age1,
            "image":img1
          })
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }
  return (
    <div  className='admin-form'>
        <form  onSubmit={handleSubmit}>
            <label>Product ID:</label>
            <input className=''  type="number" value={id} onChange={(e)=>setId(e.target.value)}/><br></br>
            <label>Product Name:</label>
            <input className=''  type="text" value={name} onChange={(e)=>setName(e.target.value)}/><br></br>
            <label>Product Price:</label>
            <input className=''  type="number" value={age} onChange={(e)=>setAge(e.target.value)}/><br></br>
             <label>Product Image:</label>
            <input className=''  type="text" value={img} onChange={(e)=>setImg(e.target.value)}/><br></br>

            <button type='submit'>submit</button>

        </form >
        <table style={{marginLeft:'450px',marginTop:'30px'}}>
             <thead>
                   <tr>
                        <th>Product Id</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Product Image</th>
                        <th>Action</th>
                   </tr>
             </thead>
             <tbody >
                {post.map(x=>(
                <tr>
                      <td>{x.id}</td>
                      <td>{x.name}</td>
                      <td>{x.age}</td>
                      <td>{<img className="image-user" alt="user profile" src={x.image}/>}</td>
                      <td>
                        <button style={{width:'200px'}}onClick={()=>{
                            openpopup(x)
                        } 
                        }>Update</button>  
                        <button  style={{width:'200px'}} onClick={()=>handleDelete(x.id)}>Delete</button>
                      </td>
                   </tr>
                   ))}
             </tbody>
         </table>
         {popup && 
         <div>  
            <form>
            <button onClick={()=>{setPopup(false)}}>X</button>
            <label>Product ID:</label>
            <input type="number" value={id1} onChange={(e)=>setId1(e.target.value)}/><br></br>
            <label>Product Name:</label>
            <input type="text" value={name1} onChange={(e)=>setName1(e.target.value)}/><br></br>
            <label>Product Price</label>
            <input type="number" value={age1} onChange={(e)=>setAge1(e.target.value)}/><br></br>
            <label>Product Image</label>
            <input type="number" value={img1} onChange={(e)=>SetImg1(e.target.value)}/><br></br>
            <button type='submit' onClick={handleupdate}>submit</button>
        </form >
        </div>}    
    </div>
  )
}
