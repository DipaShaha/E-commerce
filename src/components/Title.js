import React from "react";
export default function Title({title,name}) {
  return (
    <div className="row">
      <div className="col-10 my-2 text-center mx-auto text-title">
      	<h1 className="font-capitilize font-weight-bold">{name}
      		<strong className="text-blue">  {title}</strong>
      	</h1>
      </div>
    </div>
  );
}
