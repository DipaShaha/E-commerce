import React from "react";
import Title from './Title';
import {ProductConsumer} from '../Context';
import Product from './Product';

export default class ProductList extends React.Component {

  
  render() {

    return (
      <React.Fragment>
        <div className="container py-5">
          <Title name="Our" title="products"  />
          <div className="row">
          <ProductConsumer>
          { 
            (value)=>{
              return value.products.map((product)=>{
                  return <Product key={product.id} product={product} />
              })
            }
          }
          </ProductConsumer>
          </div> 
        </div>
      </React.Fragment>
    );
  }
}
