

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Placeoffer.scss";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { MdDescription } from "react-icons/md";
import { GiBarefoot } from "react-icons/gi";



function MyItems(props) {

  const handleClick = () => {
    props.setOfferedID(props.id)
    console.log("select:", props.id)
  }

  console.log("thisis props id", props.id)

  return (
    <div className="my-shoes-card" >
      <input type="image" id="css" onClick={handleClick} value={props.id} className="my-shoes-img" src={props.image_url} />
      <div className="placeoffer-mylisting">
        <div className="my-shoes-name">
          {props.name}
        </div>
        <div className="my-shoes-pref">
          <BsFillBookmarkHeartFill/> {props.preference}
        </div>
        <div className="my-shoes-desc">
          <MdDescription/> {props.description}
        </div>
        <div className="my-shoes-size">
          <GiBarefoot/>{props.brand}/Size: {props.size}
        </div>
      </div>
    </div>
  )
}


export default MyItems;