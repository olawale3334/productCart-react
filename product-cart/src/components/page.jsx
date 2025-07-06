import waffle from '/image-waffle-desktop.jpg'
import mobilewaffle from '/image-waffle-mobile.jpg'
import cartimage from '/icon-add-to-cart.svg'
function Card() {
    return(
        <div className=' m-5'>
            <h1>Dessert</h1>
        <div className=' md:block'>
            <div  className="relative md:w-[18rem] mt-5">
                <img className='w-[14rem] hidden md:block' src={waffle} alt="" />
                <img className='md:hidden' src={mobilewaffle} alt="" />
                <div className='absolute -bottom-4 left-1/2  -translate-x-1/2 md:left-1/4 transform md:-translate-x-1/4'>
                    <button   class="addBtn bg-[#fdfdfe] shadow-lg px-6 py-2 rounded-2xl flex items-center justify-center gap-2 whitespace-nowrap">
                     <img  class="w-6 h-6" src={cartimage} alt="" />
                   <span class="text-sm font-medium">Add to cart</span>
                   </button>
                </div>
            </div>
            <div class=" mt-7">
          <p class="text-[#c9b6b4]">Waffle</p>
          <p class="font-semibold">affle with berries</p>
          <span class="text-orange-600">$6.50</span>
        </div>
        </div>
    </div>
    )
}
export default Card