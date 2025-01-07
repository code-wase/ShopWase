import React, { useState } from 'react';

function Order() {
  const [orderItems, setOrderItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');

  const handleAddItem = () => {
    if (itemName && itemPrice) {
      setOrderItems([...orderItems, { name: itemName, price: itemPrice }]);
      setItemName('');
      setItemPrice('');
    }
  };

  const handleRemoveItem = (index) => {
    const updatedItems = [...orderItems];
    updatedItems.splice(index, 1);
    setOrderItems(updatedItems);
  };

  const calculateTotal = () => {
    return orderItems.reduce((total, item) => total + parseFloat(item.price), 0);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Order Now</h1>
      <div className="mb-4">
        <label htmlFor="itemName" className="block text-sm font-medium text-gray-700">
          Item Name:
        </label>
        <input
          type="text"
          id="itemName"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="itemPrice" className="block text-sm font-medium text-gray-700">
          Item Price:
        </label>
        <input
          type="number"
          id="itemPrice"
          value={itemPrice}
          onChange={(e) => setItemPrice(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <button
        onClick={handleAddItem}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Item
      </button>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-2">Order Summary</h2>
        <ul>
          {orderItems.map((item, index) => (
            <li key={index} className="flex justify-between mb-2">
              <span>{item.name}</span>
              <span>₹{item.price}</span>
              <button
                onClick={() => handleRemoveItem(index)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <p className="font-bold">Total: ₹{calculateTotal().toFixed(2)}</p>
      </div>
    </div>
  );
}

export default Order;