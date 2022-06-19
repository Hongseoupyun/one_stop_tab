import React from "react";
import "./ListingItem.scss";


export default function ListingItem(props) {

  const {name,size,brand,description,preference,id,picture} = props


  return (

    <section className="mylisting-container">
      <img className="mylisting-img" src={picture} />
      <div className="mylisting-card-contents">
        <div className="listing-text" id="name">
          <h1>{name}</h1>
        </div>
        <div className="listing-text" id="brand-size">
          <div className="my-brand">{brand}</div>
          <div className="my-size">Size {size}</div>
        </div>
        <div className="listing-text" id="description">
          <span>{description}</span>
        </div>
        <div className="view-offers">
        <a className="make-offer-button-href" href={`/placeoffer/${id}`}> <button type="submit">Make a Offer</button></a>
        </div>
      </div>
    </section>
  );
}


