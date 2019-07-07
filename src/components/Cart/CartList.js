import React from "react";
import Title from '../Title';
import CartItem from './CartItem';
import {ProductConsumer} from '../../Context';
export default function CartList({value}){
  
  const{cart}=value;
  return(

    <div className="container-fluid text-center mt-5"> 
      {cart.map(item=>{
        return <CartItem key={item.id} item={item} value={value} />
      })

      }
    </div>

  )
}