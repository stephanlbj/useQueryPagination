import { Root } from "../../@types"
import SingleProduct from "./SingleProduct"

type ProductListProps ={
  handle: React.Dispatch<React.SetStateAction<number>>
  data:Root[]
  handlePage: React.Dispatch<React.SetStateAction<number>>
}

const ProductList = ({data,handle, handlePage}:ProductListProps) => {



  const fetchNext = ()=>{
    handle((prev)=>prev+10)
    handlePage((prev)=>prev+10)
  }
  return (
  <>
    <div className="products_container">

{
    data.map((product)=>{
        return <SingleProduct 
        key={product.id}
        product={product}/>
    })
}


</div>

<div style={{display:'flex', alignItems:'center', justifyContent:'center',
 gap:10, marginTop:'20px'}}>

<p onClick={()=>handle((prev)=>{
  if(prev===10) return 10
  return prev -10
})}>Prev</p>

<p onClick={fetchNext}>Next</p>

 </div>
  </>
  )
}

export default ProductList