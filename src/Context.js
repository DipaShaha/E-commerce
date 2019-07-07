import React from 'react';
import {storeProducts,detailProduct} from './data'; 

const ProductContext=React.createContext();

 class ProductProvider extends React.Component{
	state={
    	products:storeProducts,
    	detailProduct:detailProduct,
    	cart:[],
    	modalOpen:false,
    	modalProduct:detailProduct,
    	cartSubTotal:0,
    	cartTax:0,
    	cartTotal:0
  	}

  	// storeProducts=()=>{
  	// 	let tempProducts=[];
  	// 	storeProducts.forEach(item=>{
  	// 		const singleItem={...item};
  	// 		tempProducts={...tempProducts,item};
  	// 	})
  	// 	this.setState(()=>{
  	// 		return {products:tempProducts};
  	// 	})
  	// }

  	getItem=(id)=>{
  	  const product=this.state.products.find(item=>item.id===id);
  	  return product;

  	}
	
	handleDetail=(id)=>{
      const product=this.getItem(id);
      console.log("hrkk");
      console.log(detailProduct+"hrkk");
      // this.setState(()=>{
      // 	return{detailProduct:product}
      // })
      this.setState(
      	{detailProduct:product}
      )
	}

	addToCart=(id)=>{
		let tempProducts=[...this.state.products];
		const index=tempProducts.indexOf(this.getItem(id));
		const product=tempProducts[index];
		product.inCart=true;
		product.Count=1;
		const price=product.price;
		product.total=price;
		this.setState(
		{
			products:tempProducts,
			cart:[this.state.cart,product]
		}
		);
	}

	openModal=id=>{
		const product=this.getItem(id);
		this.setState({
			modalProduct:product,
			modalOpen:true
		})
	}


	closeModal=()=>{
		this.setState({
			modalOpen:false
		})
	}

	increment=id=>{

	}


	decrement=id=>{

	}

	removeItem=id=>{

	}

	clearCart=()=>{

	}
	
	
	render(){
		return(
			<ProductContext.Provider 
				value={{
					...this.state,
					handleDetail:this.handleDetail,
					addToCart:this.addToCart,
					openModal:this.openModal,
					closeModal:this.closeModal,
					increment:this.increment,
					decrement:this.decrement,
					removeItem:this.removeItem,
					clearCart:this.clearCart
				}}
			>
				{this.props.children}}

			</ProductContext.Provider>
		)
	}
}

const ProductConsumer=ProductContext.Consumer;
export {ProductProvider,ProductConsumer,ProductContext};