import Form from "react-bootstrap/Form";
import React, { useEffect, useState } from "react";

function Sidebar(props) {
  const { priceRange, setPriceRange, products, filterBands } = props;

  const uniqueBand = [...new Set(products.map(product => product.band))];

  const [selectedBands, setSelectedBands] = useState(
    uniqueBand.reduce((checked, band) => {
      checked[band] = false;
      return checked;
    }, {})
  );
  const handleCheckBox = (e, band) => {
    setSelectedBands(prevState => ({
      ...prevState,
      [band]: e.target.checked,
    }));
  };

  useEffect(() => {
    filterBands(selectedBands);
  }, [selectedBands]);

  const handlePriceChange = e => {
    setPriceRange(e.target.value);
    filterBands(selectedBands);
  };

  return (
    <div>
      <Form.Label>Filter by price</Form.Label>
      <Form.Range value={priceRange} onChange={handlePriceChange} />
      <div>Current max price: £{priceRange}</div>
      <hr />
      <Form.Label className="fs-3 text-primary  float-left">Band</Form.Label>
      {uniqueBand.map(band => (
        <Form.Check
          key={band}
          label={band}
          checked={selectedBands[band]}
          onChange={e => handleCheckBox(e, band)}
        />
      ))}
    </div>
  );
}

export default Sidebar;
