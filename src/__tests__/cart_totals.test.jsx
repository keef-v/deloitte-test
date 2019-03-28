import React from "react";
import { render, waitForElement } from 'react-testing-library';
import CartTotals from "../components/cart/cart_totals";

it('renders correct total amount', async () => {
  
  const { getByText } = render(<CartTotals total={"10.99"} subTotal={"10.99"}/>);

  await waitForElement(() => getByText(/10.99/i));
});