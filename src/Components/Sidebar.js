import Form from "react-bootstrap/Form";
import React, { useEffect, useState } from "react";

function Sidebar(props) {
  const {
    priceRange,
    setPriceRange,
    products,

    setFilteredProducts,
    filteredProducts,
  } = props;

  const uniqueBand = [...new Set(products.map(product => product.band))];

  const [selectedBands, setSelectedBands] = useState(
    uniqueBand.reduce((checked, band) => {
      checked[band] = false;
      return checked;
    }, {})
  );
  // Applies price and band filter -- can seperate into 2 different useEffects later!                              @@@@@@@@@@@@@@@@@@@
  useEffect(() => {
    const bandFilter = products.filter(product => {
      if (Object.values(selectedBands).every(value => !value)) {
        return true; // Include all products in the filtered array if no band has been checked
      } else if (selectedBands[product.band]) {
        return true;
      } else return false;
    });

    const priceAndBandFilter = bandFilter.filter(
      products => products.price <= priceRange
    );
    console.log(priceRange);

    setFilteredProducts(priceAndBandFilter);
  }, [selectedBands, priceRange]);

  const handleCheckBox = (e, band) => {
    setSelectedBands(prevState => ({
      ...prevState,
      [band]: e.target.checked,
    }));
  };

  const handlePriceChange = e => {
    setPriceRange(e.target.value);
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
