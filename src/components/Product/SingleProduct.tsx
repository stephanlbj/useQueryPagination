import { Root } from "../../@types"

 

const SingleProduct = ({product}:{product:Root}) => {
  return (
    <div style={
        {
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
        
        width="100%"
        style={{objectFit:'fill', height:'120px' }}
        src={product.images[0]}
        alt="product-_image"
        />

        <p style={{marginTop:'8px'}}>{product.title.slice(0,15)}</p>
    </div>
  )
}

export default SingleProduct