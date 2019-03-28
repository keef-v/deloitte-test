import React from "react";
import { render, waitForElement } from 'react-testing-library';
import Voucher from "../components/cart/cart_voucher";


it('renders alert when voucher is NOT a 4 digit number', async () => {
  
  const { getByText } = render(<Voucher alert = {1} />);

  await waitForElement(() => getByText(/Voucher codes have to be a 4 digit number/i));
});