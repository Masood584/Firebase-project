import React,{ useState,useEffect } from 'react'
import Navbar from '../Navbar';
import firebase from 'firebase';
import 'firebase/firestore'

const Product = () => {
  useEffect(()=>{
    getProductData()
  },[])
  const fireStore = firebase.firestore()
  const [card,setCard]=useState([])
  console.log('sds',card)
  const getProductData = async () => {

    try {
      const resData = await fireStore.collection('product_data').get()
      const convertedData = resData.docs.map(el => ({ ...el.data(), id: el.id }))
      console.log('getdata...',convertedData)
      setCard([...convertedData])
      

    } catch (error) {
       console.log('getdata error...',error.message) 
    }

  }

  const deleteData=async(id)=>{
    try { 
      await fireStore.collection('product_data').doc(id).delete()
      getProductData()
  } catch (err) {
      console.log(err)
  }
  }

  return (
    <div>
      <Navbar />
      <h1>Our products</h1>
      {
        card.map((val)=>{
          return(
      <div style={{border:'1px solid black'}}>
      <ul key={val.id}>
        <li>{val.proName}</li>
        <li>{val.proDesc}</li>
        <li>{val.proPrice}</li>
      </ul>
      <button onClick={()=>deleteData(val.id)}>delete item</button>
      </div>
        )})
      }
    </div>
  )
}

export default Product;
