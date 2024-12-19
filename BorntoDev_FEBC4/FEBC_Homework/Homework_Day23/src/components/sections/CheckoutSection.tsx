import React, { useState } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const CheckoutSection: React.FC = () => {
  const [billingInfo, setBillingInfo] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
  });

  const cartItems: CartItem[] = [
    { id: 1, name: "Samsung Galaxy S21 (128GB) Phantom Gray", price: 599.99, quantity: 1 },
    { id: 2, name: "Samsung Galaxy S21 (256GB) Phantom White", price: 699.99, quantity: 2 },
    { id: 3, name: "Samsung Galaxy S21 (256GB) Phantom Pink", price: 699.99, quantity: 1 },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBillingInfo((prev) => ({ ...prev, [name]: value }));
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Billing Info:", billingInfo);
    alert("Order placed successfully!");
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      {/* Billing Address */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Billing Address</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="fullName">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={billingInfo.fullName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={billingInfo.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="address">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={billingInfo.address}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="city">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={billingInfo.city}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="zipCode"
              >
                ZIP Code
              </label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={billingInfo.zipCode}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
          </div>
        </form>
      </div>

      {/* Your Cart */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
        <ul className="space-y-4">
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center border-b pb-2"
            >
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-600">
                  {item.quantity} x ${item.price.toFixed(2)}
                </p>
              </div>
              <p>${(item.quantity * item.price).toFixed(2)}</p>
            </li>
          ))}
        </ul>
        <div className="flex justify-between items-center mt-4 font-bold">
          <p>Total:</p>
          <p>${totalAmount.toFixed(2)}</p>
        </div>
      </div>

      {/* Confirm Button */}
      <button
        type="submit"
        onClick={handleSubmit}
        className="w-full py-3 bg-primary-700 text-white font-medium rounded-lg hover:bg-blue-700"
      >
        Confirm Payment
      </button>
    </div>
  );
};

export default CheckoutSection;
