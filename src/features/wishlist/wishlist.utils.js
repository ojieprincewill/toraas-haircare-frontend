export const toggleWishlistItem = (wishItems, wishItemToToggle) => {
  const existingIndex = wishItems.findIndex(
    (item) => item.id === wishItemToToggle.id
  );

  if (existingIndex !== -1) {
    const updatedWishItems = [...wishItems];
    updatedWishItems.splice(existingIndex, 1);
    return updatedWishItems;
  } else {
    return [...wishItems, { ...wishItemToToggle, quantity: 1 }];
  }
};
