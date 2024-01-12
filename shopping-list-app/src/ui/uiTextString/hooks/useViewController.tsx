const useViewController = (
  // call back to execute when the string value changes
  onValueChange?: (value: string) => void
) => {
  /********************************************/
  /* Event Handlers                           *
  /********************************************/
  const handleOnValueChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onValueChange) {
      const value = event.target.value;
      onValueChanged(value);
    }
  };

  return {
    handleOnValueChanged,
  };
};

export default useViewController;
