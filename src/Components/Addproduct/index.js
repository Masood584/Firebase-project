import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar';
import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/storage'


const AddProduct = () => {

    const [proName,setProName]=useState('')
    const [proDesc,setProDesc]=useState('')
    const [proPrice,setProPrice]=useState('')
    const [proPic,setProPic]= useState(null)
    const fireStore = firebase.firestore()
    const storage = firebase.storage()
    const navigete=useNavigate()

    const uploadProPic =()=>{
       if(proPic===null)
       return;
       const imageref= storage.ref('/proPic/$ {proPic.name}').put(proPic)
       .on("state_changed",alert("success"),alert)
       imageref();

    }
  
    const saveProductData=async()=>{
      const payload={
        proName,
        proDesc,
        proPrice
      }
      try {
        console.log('chalarha')
       await fireStore.collection('product_data').add(payload)
       console.log('chalgya bhai')
       uploadProPic()
       navigete('/product',{replace:true})
       setProDesc('')
       setProName('')
       setProPrice('')
      } catch (error) {
        console.log(error.message)
      }
    }
 
  return (
    <div>
    <Navbar/>
      <h2>Add your product </h2>
      <p>product name</p>
      <input type="text" 
      placeholder='Enter Your product name'
      value={proName} 
      onChange={e=>setProName(e.target.value)} 
      />
      <p>add product description</p>
      <input type="text"
      placeholder='Enter your description' 
      value={proDesc}
      onChange={e=>setProDesc(e.target.value)}
      />  
      <p>add product price </p>
      <input type="number" 
      placeholder='enter your price'
      value={proPrice}
      onChange={e=>setProPrice(e.target.value)}
      />  
      <p>add product image</p>
      <input type="file"
      onChange={e=>setProPic(e.target.files[0])}
      /> 

      
      <button onClick={saveProductData}>Add </button>
    </div>
  )
}

export default AddProduct;
