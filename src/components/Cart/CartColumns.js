import React from "react";
export default function CartColumns(){
	return(
		<div className="container-fluid text-center d-none d-lg-block"> 
			<div className="row">
				<div className="col-10 col-lg-2 mx-auto">
					<p className="text-uppercase">Products</p>
				</div>

				<div className="col-10 col-lg-2 mx-auto">
					<p className="text-uppercase">name of product</p>
				</div>
				<div className="col-10 col-lg-2 mx-auto">
					<p className="text-uppercase">price</p>
				</div>
				<div className="col-10 col-lg-2 mx-auto">
					<p className="text-uppercase">quantiry</p>
				</div>
				<div className="col-10 col-lg-2 mx-auto">
					<p className="text-uppercase">remove</p>
				</div>
				<div className="col-10 col-lg-2 mx-auto">
					<p className="text-uppercase">total</p>
				</div>
			</div>
		</div>

	)
}