const useViewController = (
  // call back to execute when the string value changes
  onValueChanged?: (value: string) => void
) => {
  /********************************************/
  /* Event Handlers                           *
  /********************************************/
  const handleOnValueChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onValueChanged) {
      const value = event.target.value;
      onValueChanged(value);
    }
  };

  return {
    handleOnValueChanged,
  };
};

export default useViewController;
