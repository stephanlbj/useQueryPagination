import { useState } from 'react'
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

  const [page, setPage] = useState(0)
  const [limit, setLimit] = useState(10)

 console.log(page)

  const { isPending, isError, error, data } =
    useQuery({
      queryKey: ['projects', limit],
      queryFn: () => fetchProducts(limit, page),
      placeholderData: keepPreviousData,
    })

   



    if(isPending)
    return <Wrapper label='Loading...'/>

    if(isError)
    return <Wrapper label={`${error.message}`}/>

     


  return (
 <main style={mainStyle}>
  {data && data.products.length > 0 ? (
    <ProductList data={data.products}
    handle={setLimit}
    handlePage={setPage}/>
  ) :<p style={wrapperStyle}>No data available.</p>}
 </main>
  )
}

export default App
