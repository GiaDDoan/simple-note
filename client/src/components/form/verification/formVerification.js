const formVerification = (formData) => {
  console.log('VERIFICATION ', formData);
  console.log(formData.collection.length);
  if (formData.userInput.length === 0) {
    console.log(`${formData.collection} empty`);
    return false;
  }
  return true;
};

export default formVerification;
