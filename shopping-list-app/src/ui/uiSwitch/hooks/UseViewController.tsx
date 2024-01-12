const useViewController = (onValueChanged?: (value: boolean) => void) => {
  /********************************************/
  /* Event Handlers                           *
  /********************************************/
  const handleOnValueChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onValueChanged) {
      const value = event.target.checked;
      onValueChanged(value);
    }
  };

  return {
    handleOnValueChanged,
  };
};

export default useViewController;
