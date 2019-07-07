import React from "react";
import {ProductConsumer} from '../Context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';
import styled from 'styled-components';
export default class Modal extends React.Component{

  render(){
      return (
   		<ProductConsumer>
   		{ (value)=>{
   			const{modalOpen,closeModal}=value;
   			const{img,title,price}=value.modalProduct;
   			if(!modalOpen)
   				{return null;}
   			else{
   			return(
   				<ModalContainer>
   					<div class="container">
   						<div class="row">
   							<div id="modal" className="p-5 col-8 col-md-6 col-lg-4 mx-auto text-center text-apitalize">
   								<h5>item added to the cart</h5>
   							    <img src={img} alt="product" className="img-fluid"/>
   								<h5>{title}</h5>
   								<h5 className="text-muted">price: $ {price}</h5>
   								<Link to="/">
    								<ButtonContainer
    									onClick={()=>closeModal()}
    								>
    								Store
    								</ButtonContainer>
    							</Link> 
    							<Link to="/cart">
    								<ButtonContainer
    									cart onClick={()=>closeModal()}
    								>
    								Go To The Cart
    								</ButtonContainer>
    							</Link> 
   							</div>
   						</div>
   					</div>
   				</ModalContainer>
   			)
   				}
   			}
   		}
   		</ProductConsumer>
 	 );

  }

}
const ModalContainer=styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,.3);
display:flex;
align-item:center;
justify-content:center;
#modal{
	background:var(--mainWhite);
}
`