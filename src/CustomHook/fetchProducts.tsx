import {baseURL} from "../constants/constant"


    export const fetchProducts = async (limit:number, page:number)=>{

  const skip = page* 10 - 10
 
        try {
            const req = await fetch(`${baseURL+limit+"&skip="+skip}`)
            const response = await req.json()
             
           return response
        } catch (error) {
            if(error instanceof Error){
                throw new Error(error.message)
            }
            
        }

    }
