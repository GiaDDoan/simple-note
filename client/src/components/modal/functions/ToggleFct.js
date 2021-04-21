export const ToggleFct = (modalToggle, setModalToggle) => {
  console.log('Toggle called');
  setModalToggle((modalToggle) => !modalToggle);
};
