import React from 'react'
import { MdOutlineDeleteSweep } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { remove } from '../redux/slices/CartSlice';

function CartItem({item,itemIndex}) {
  const dispatch=useDispatch();
  function removeFromCart(){
    const confirmation = window.confirm("Are you sure to remove this product?");
   if (confirmation){
    dispatch(remove(item.id))
    toast.success("item removed")
   }
    else{
      return false;

    }
  }
  return (
    <div className="flex items-center p-2 md:p-5 justify-between   mt-2 mb-2 md:mx-5 ">
     
      <div  className="w-[30%]">
        <img className="object-cover " src={item.image} alt="" />
      </div>
      <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
     <h1>{item.title}</h1> 
     <h1>{item.description}</h1>
      </div>
      <div>
        <p>${item.price}</p>
      </div>
      <div
      onClick={removeFromCart}
      >
      <MdOutlineDeleteSweep />
      </div>
    </div>
  )
}

export default CartItem
