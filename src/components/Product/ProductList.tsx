import { Root } from "../../@types"
import SingleProduct from "./SingleProduct"

type ProductListProps ={
  showMore: () => void
  showLess: ()=>void
  data:Root
  itemPerpage: number
}

const ProductList = ({data,showMore, showLess, itemPerpage}:ProductListProps) => {

  
 
 
  return (
  <>
 
 <div className="products_container">

{
   data.products.map((product)=>{
       return <SingleProduct 
       key={product.id}
       product={product}/>
   })
}


</div>

<div style={{display:'flex', alignItems:'center', justifyContent:'center',
 gap:10, marginTop:'20px'}}>


{
  itemPerpage > 0 && (
    <button 
    style={{cursor:'pointer'}}
    onClick={showLess}>Prev</button>
  )
}
 
  
  
{
  (data.total - data.limit) === data.skip  ? null :  (
    <button
    style={{cursor:'pointer'}}
     onClick={showMore}>Next</button>
  )
}
 
   
  
 </div>
  </>
  )
}

export default ProductList