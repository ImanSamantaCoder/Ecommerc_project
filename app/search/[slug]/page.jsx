"use client"
import React from 'react'
import { useProductContext } from '../../context/ProductContext'
import Product from "../../component/Product"
const page = ({params}) => {
    const {slug} = React.use(params);
    const {products} = useProductContext();
    const items = products.filter(p=>p.title.toLowerCase().includes(slug.toLowerCase()))
  return (
    <div>
      <Product items={items}/>
    </div>
  )
}

export default page
