"use client"
import React from 'react'
import Product from './component/Product'
import { useProductContext } from './context/ProductContext'
const page = () => {
  const {data} = useProductContext()
  console.log("data:",data)
  return (
    <div>
      <Product items={data}/>
    </div>
  )
}

export default page
