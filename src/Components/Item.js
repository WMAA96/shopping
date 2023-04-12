import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";

function Item(props) {
  const location = useLocation();
  const item = location.state;

  console.log(item);

  return <h1>{item.band}</h1>;
}

export default Item;
