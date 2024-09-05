import { useState } from 'react';

// Custom hook for managing a shopping cart
export const useCart = () => {
  // State for tracking selected items in the cart (by their ID)
  const [selectedItems, setSelectedItems] = useState<{ [key: string]: boolean }>({});

  // State for tracking the quantity of each item in the cart (by their ID)
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});


  // Function to handle the change of a checkbox (select/deselect item)
  const handleCheckboxChange = (id: string) => {
    setSelectedItems(prevSelectedItems => ({
      // Toggle the selection status of the item with the given ID
      ...prevSelectedItems,
      [id]: !prevSelectedItems[id],
    }));
  };

  // Function to handle changing the quantity of an item
  const handleQuantityChange = (id: string, action: 'increase' | 'decrease') => {
    setQuantities(prevQuantities => {
      const currentQuantity = prevQuantities[id] || 1; // Default to 1 if the item is not in the quantities state
      const newQuantity =
        action === 'increase'
          ? currentQuantity + 1
          : currentQuantity > 1 // Decrease only if current quantity is greater than 1
          ? currentQuantity - 1
          : 1;
      return {
        // Update new quantity for the item
        ...prevQuantities,
        [id]: newQuantity,
      };
    });
  };

  // Function to handle removing an item from the cart
  const handleRemoveItem = (id: string) => {
    setCartItems(prevCartItems =>
      // Filter out the item with the given ID
      prevCartItems.filter(item => item.id !== id)
    );
    setSelectedItems(prevSelectedItems => {
      const updatedSelectedItems = { ...prevSelectedItems };
      delete updatedSelectedItems[id]; // Remove the item from the selected items state
      return updatedSelectedItems;
    });
    setQuantities(prevQuantities => {
      const updatedQuantities = { ...prevQuantities };
      delete updatedQuantities[id]; // Remove the item from the quantities state
      return updatedQuantities;
    });
  };

  // Calculate the total payment amount
  const totalPayment = cartItems.reduce((total, item) => {
    const quantity = quantities[item.id] || 1;
    const price = parseFloat(item.price.replace('$', '')); // Convert price to a number
    return total + price * quantity; // Add the total price for this item to the total
  }, 0).toFixed(2);

  // Return all the states and functions so they can be used in components
  return {
    selectedItems,
    quantities,
    handleCheckboxChange,
    handleQuantityChange,
    handleRemoveItem,
    totalPayment,
  };
};
