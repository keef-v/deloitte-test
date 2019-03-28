import React from "react";
import { render, waitForElement } from 'react-testing-library';
import AddToCartButton from "../components/products/add_button";

it('renders out of stock message for product', async () => {
  
  const { getByText } = render(<AddToCartButton productQty="0" />);

  await waitForElement(() => getByText(/Sorry This item is not in stock/i));
});