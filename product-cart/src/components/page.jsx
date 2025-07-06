import waffle from '/image-waffle-desktop.jpg'
import mobilewaffle from '/image-waffle-mobile.jpg'
import cartimage from '/icon-add-to-cart.svg'
function Card({product}) {
    console.log(product);
    
    
    return (
    <div className="m-5">
      <h1 className="text-3xl font-bold mb-6">Dessert</h1>

      <div className="flex flex-col  md:flex-row ">
       
        <div className="flex flex-col flex-1">
          <div className="grid grid-cols-1 md:grid-cols-3 ">
            {product.map((item, index) => (
              <div key={index} className="md:block">
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
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 md:left-1/4 transform md:-translate-x-1/4">
                    <button className="addBtn bg-[#fdfdfe] shadow-lg px-6 py-2 rounded-2xl flex items-center justify-center gap-2 whitespace-nowrap">
                      <img className="w-6 h-6" src={cartimage} alt="cart" />
                      <span className="text-sm font-medium">Add to cart</span>
                    </button>
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
            ))}
          </div>
        </div>

        
        <div className="hidden bg-white w-[20rem] rounded-lg shadow-xl md:block h-fit py-5 shrink-0">
          <p className="text-orange-700 font-semibold mx-5 text-2xl mt-5">
            Your Cart (<span className="addToCart">0</span>)
          </p>
          <div className="cart-display cart-items-js mx-5 mt-3" />
          <div className="empty-cart-text text-center mt-40 px-4">
            <p className="text-orange-700">Your added items will be here</p>
          </div>
        </div>
      </div>

    
      <div className="px-4 md:hidden mt-10">
        <div
          id="cart-mobile"
          className="bg-white rounded-lg shadow-xl py-5 shrink-0 overflow-auto"
        >
          <p className="text-orange-700 font-semibold mx-5 text-2xl mt-5">
            Your Cart (<span className="addToCart-mobile">0</span>)
          </p>
          <div className="cart-display mx-5 mt-3" />
          <div className="empty-cart-text text-center mt-40 px-4">
            <p className="text-orange-700">Your added items will be here</p>
          </div>
        </div>
      </div>
    </div>
    )
}
export default Card