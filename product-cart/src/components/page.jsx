import empty from '/illustration-empty-cart.svg'
import cartimage from '/icon-add-to-cart.svg'
import remove from '/icon-remove-item.svg'
import carbon from '/icon-carbon-neutral.svg'
import increase from '/icon-increment-quantity.svg'
import decrease from '/icon-decrement-quantity.svg'

import { useState } from 'react'
function Card({product}) {
    
  const [cart, setCart] = useState([])
  const [activdproductid,setActivdproductid] = useState(null)

    function addToCart(item) {
       const myItems = cart.find((items)=> item.id === items.id)
      if (myItems) {
       const updateCart = cart.map((product)=> item.id === product.id
       ?{...product, qunatity: product.qunatity +1}
       :product
      )
      setCart(updateCart)
      } else{
        setCart([...cart,{...item, qunatity: 1}])
      }  
      setActivdproductid(item.id)
    }


      function decreaseFromCart(item) {
          const myItems = cart.find((i)=> i.id === item.id)

         if (myItems.qunatity === 1){
          setCart( cart.filter((i)=> i.id !== item.id))
          setActivdproductid(null)
         } else{
           const updateCart = cart.map((i) => i.id === item.id ? { ...i, qunatity: i.qunatity -1} : i)
           setCart(updateCart)
         }
      }
    const totalQuantity = cart.reduce((sum,item)=> sum + item.qunatity , 0)
     const totalAmount = cart.reduce((sum,item)=> sum + item.qunatity * item.price, 0 )
    return (
      <>
    <div className="m-5">
      <h1 className="text-3xl font-bold mb-6">Dessert</h1>

      <div className="flex flex-col  md:flex-row ">
       
        <div className="flex flex-col flex-1">
          <div className="grid grid-cols-1 md:grid-cols-3 ">

            {product.map((item) => {
             const  inCart = cart.find((i)=> i.id === item.id)
              const isActive = activdproductid === item.id

              return(
                 <div key={item.id} className="md:block">
                <div className="relative md:w-[18rem] mt-5">
                  <img
                    className="w-[14rem] hidden md:block"
                    src={item.desktopimg}
                    alt={item.name}
                  />
                  <img
                    className="md:hidden"
                    src={item.mobileimg}
                    alt={item.name}
                  />
                 <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 md:left-1/4 transform md:-translate-x-1/4 ">
                      {!inCart || !isActive ? (
                        <button
                          onClick={() => addToCart(item)}
                          className="addBtn bg-[#fdfdfe] shadow-lg px-6 py-2 rounded-2xl flex items-center justify-center gap-2 "
                        >
                          <img className="w-6 h-6" src={cartimage} alt="cart" />
                          <span className="text-sm font-medium">Add to cart</span>
                        </button>
                      ) : (
                        <div className=''>
                        <button className="bg-[#46280a] shadow-lg px-10 py-2 rounded-2xl flex items-center justify-between w-fit  gap-6 ">
                          <img
                            onClick={() => decreaseFromCart(item)}
                            className="w-3 cursor-pointer"
                            src={decrease}
                            alt="Decrease"
                          />
                          <span className="text-sm  text-white">
                            {inCart.qunatity}
                          </span>
                          <img
                            onClick={() => addToCart(item)}
                            className="w-3 cursor-pointer"
                            src={increase}
                            alt="Increase"
                          />
                        </button>
                        </div>
                      )}
                   </div>

                </div>
                <div className="mt-7">
                  <p className="text-[#c9b6b4]">{item.name}</p>
                  <p className="font-semibold">{item.desc}</p>
                  <span className="text-orange-600">
                    ${(item.price / 100).toFixed(2)}
                  </span>
                </div>
              </div>
              );
            })}
           
          </div>
        </div>

        
        <div className="hidden bg-white w-[20rem] rounded-lg shadow-xl md:block h-fit py-5 shrink-0">
          <p className="text-orange-700 font-semibold mx-5 text-2xl mt-5">
            Your Cart ({totalQuantity})
          </p>
            {cart.length === 0 ? ( 
              <div >
                <div className="flex justify-center">
                    <img src={empty} alt="img" />
                </div>
                  <div className="empty-cart-text text-center  px-4">
                    <p className="text-orange-700">Your added items will be here</p>
                  </div>
             </div> 
              
            )   : (
                
           <div className='mx-4'>
                {cart.map((item)=>
                  <div>
                     <p className='mt-3'>{item.desc}</p>
                <div className="flex justify-between mt-2">
                  <div className="flex gap-3">
                    <span className="text-orange-700">{item.qunatity}x</span>
                    <span className="text-[#c9b6b4]">@{(item.price / 100).toFixed(2)}</span>
                    <span>${(item.price / 100).toFixed(2)}</span>
                  </div>
                  <div>
                    <img src={remove} alt="" />
                  </div>
                </div>
                <hr className='mt-3' />
                  </div>
                )}
                <div className='mt-5'>
                   { cart.length > 0 && ( <div>
                     <div className='flex justify-between'>
                     <p>Total order:</p>
                     <p><b>${(totalAmount / 100).toFixed(2)}</b></p>
                   </div>
                     <div className='bg-pink-50 rounded-md  py-2 mt-4'>
                         <div className='flex justify-center  gap-2 items-center text-xs '>
                          <img className='w-5' src={carbon} alt="" />
                          <p>this is a <b>carbon-neutral</b> delivery</p>
                         </div>
                     </div>
                      <div className=' mt-5'>
                        <button  className="  w-full bg-[#ff8000] hover:bg-[#46280a] text-white py-2 rounded-xl">
                            Confirm Order
                         </button>
                      </div>
                    </div>
                         ) }
                </div>
                
           </div>
               
          )}
             
          
        </div>
      </div>

       {/* mobile cart */}
      <div className="px-4 md:hidden mt-10">
        <div className="bg-white w-[549x] rounded-lg shadow-xl py-5 shrink-0 overflow-auto">
          <p className="text-orange-700 font-semibold mx-5 text-2xl mt-5">Your Cart ({totalQuantity})</p>
            {cart.length === 0 ? ( 
              <div >
                <div className="flex justify-center">
                    <img src={empty} alt="img" />
                </div>
                  <div className="empty-cart-text text-center  px-4">
                    <p className="text-orange-700">Your added items will be here</p>
                  </div>
             </div> 
              
            )   : (
                
           <div>
                {cart.map((item)=>(
                  <div className='mx-4 mb-3'>
                     <p>{item.desc}</p>
                <div className="flex justify-between mt-2">
                  <div className="flex gap-3">
                    <span className="text-orange-700">{item.qunatity}x</span>
                    <span className="text-[#c9b6b4]">@{(item.price / 100).toFixed(2)}</span>
                    <span>${(item.price / 100).toFixed(2)}</span>
                  </div>
                  <div>
                    <img src={remove} alt="" />
                  </div>
                </div>
                <hr className='mt-5 ' />
                 
                  </div>
                ))}
                    { cart.length > 0 && ( <p>Total order:</p>) } 
           </div>
              
          )}
        </div>
      </div>
    </div>
    </>
    )
}
export default Card