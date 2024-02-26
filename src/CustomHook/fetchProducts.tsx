import {baseURL} from "../constants/constant"


    export const fetchProducts = async (skip:number)=>{

  
 
        try {
            const req = await fetch(`${baseURL+skip}`)
            const response = await req.json()
             
           return response
        } catch (error) {
            if(error instanceof Error){
                throw new Error(error.message)
            }
            
        }

    }
