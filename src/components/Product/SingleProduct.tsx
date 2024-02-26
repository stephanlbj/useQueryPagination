import { Product } from "../../@types"
import SkeletonComponent from "../SkeletonComponent"

 

const SingleProduct = ({product }:{product:Product}) => {

  


  if(Object.keys(product).length === 0)
  return <SkeletonComponent/>



  return (
    <div style={
        {
            position:'relative',
            display:'flex',
            flexDirection:'column', 
            alignItems:'center',
            justifyContent:'center',
            height:'200px', width:'80%' ,
            borderWidth:'1px', border:'1px solid gray', 
            justifySelf:'center', borderRadius:'8%', overflow:'hidden'
            }
    }>
        
        <img
        
         
        style={{objectFit:'cover', height:'100%', width:'100%',
       cursor:'pointer' }}
        src={product.images[0]}
        alt="product-_image"
        />

      <div 
      className="product_title"
      style={{ position:'absolute', bottom:0,  
      left:0, right:0}}>
      <p style={{textAlign:'center'}}>
      {product.title.slice(0,15)}
      </p>
      </div>
     
 

    </div>
  )
}

export default SingleProduct