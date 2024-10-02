import { useState, useEffect } from 'react'

import './App.css'
import Card from './Card'
function App() {
  const [info, setInfo] = useState('')
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
  .then((response) => response.json())
  .then((data) => setItems(data));
  
},[info])
  return (
    <>
      <div className='flex flex-col items-center p-5'>
<p className='text-base-content text-4xl font-semibold'>Products list</p>
    
      <div className='grid grid-cols-4 gap-10 place-content-center p-10 max-md:grid-cols-3 max-sm:grid-cols-2'>

      {items.map((item, index) => {
        return <div key={index} className=''>
          
                <Card image={item.image} title={item.title} price={item.price}></Card>

         
        </div>;

})}
</div>
</div>
     
    </>
  )
}

export default App
