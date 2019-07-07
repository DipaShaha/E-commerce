import React from "react";
import {Link} from 'react-router-dom';

import Title from '../Title';
import CartTotals from './CartTotals';
import CartColumns from './CartColumns';
import CartList from './CartList';
import EmptyCart from './EmptyCart';
import {ButtonContainer} from '../Button';

import {ProductConsumer} from 'Context';
export default class Cart extends React.Component{

  render(){
      return (
	    <section>
	    	<ProductConsumer>
	    		{(value)=>{
	    			const{cart}=value;
	    			if(cart.length>0){
	    				return(
	    				<React.Fragment>
	    					<Title name="your" title="cart" />
	    					<CartColumns />
	    					<CartList value={value}/>
	    					<CartTotals value={value} />
	    				</React.Fragment>

	    				)
	    			}else{
	    				return <EmptyCart/>;
	    			}
	    		}}
    		</ProductConsumer>
    	</section>
  	);

  }

}
