import Form from "react-bootstrap/Form";
import React, { useEffect, useState } from "react";

function Sidebar(props) {
  const { priceRange, setPriceRange } = props;

  return (
    <div>
      <Form.Label>Filter by price</Form.Label>
      <Form.Range
        defaultValue={priceRange}
        onChange={e => setPriceRange(e.target.value)}
      />
    </div>
  );
}

export default Sidebar;
