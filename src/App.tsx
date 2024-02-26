import { useCallback, useState } from 'react'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import './App.css'
import { fetchProducts } from './CustomHook/fetchProducts'
import ProductList from './components/Product/ProductList'
import Wrapper, { wrapperStyle } from './components/Wrapper'



const mainStyle = {
  marginTop:'20px',
  marginBottom:'20px'
}



function App() {


  const [skip, setSkip] = useState(0)
 

  
 

 const showNext = useCallback(()=>{
  
  setSkip((prev)=>prev+10)
 },[setSkip])

 const showPrev = useCallback(()=>{
  setSkip((prev)=>{
    if(prev===0) return 0
    return prev - 10
  })
 },[setSkip])


  const { isPending, isError, error, data  } =
    useQuery({
      queryKey: ['projects', skip],
      queryFn: () => fetchProducts(skip),
      placeholderData: keepPreviousData,
      staleTime: 1000* 60 * 3
    })

   



    if(isPending)
    return <Wrapper label='Loading...'/>

    if(isError)
    return <Wrapper label={`${error.message}`}/>

  
 

  return (
 <main style={mainStyle}>
  {data && data.products.length > 0 ? (
    <ProductList 
    data={data}
    showMore={showNext}
    showLess={showPrev}
    itemPerpage={skip}
    />
  ) :<p style={wrapperStyle}>No data available.</p>}
 </main>
  )
}

export default App
