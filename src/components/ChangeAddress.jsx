import React, { useState } from "react";

const ChangeAddress = ({ setAddress, setIsModelOpen }) => {
  const [newAddress, setNewAddress] = useState(""); // Controlled state for the input field

  const onClose = (event) => {
    event.preventDefault(); // Prevent the form from submitting or refreshing the page
    if (newAddress.trim()) {
      setAddress(newAddress); // Update the address in the parent component
    }
    setIsModelOpen(false); // Close the modal
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Change Shipping Address</h2>
      <form>
        <label className="block mb-2">New Address</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Enter new address"
          value={newAddress} // Binding input value to state
          onChange={(e) => setNewAddress(e.target.value)} // Updating state when input changes
        />
        <button
          className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
          onClick={() => setIsModelOpen(false)}
        >
          Cancel
        </button>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={onClose}
        >
          Save Address
        </button>
      </form>
    </div>
  );
};

export default ChangeAddress;
