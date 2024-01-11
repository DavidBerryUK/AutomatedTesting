/**
 * View controller for UI Button, seperates logic from compoment
 * for easier testing
 *
 * @param onClick
 * @returns
 */
const useViewController = (onClick?: () => void) => {
  /********************************************/
  /* Event Handlers                           *
    /********************************************/
  const handleOnClickEvent = () => {
    if (onClick) {
      onClick();
    }
  };

  // Return public function for use by host
  return {
    handleOnClickEvent,
  };
};

export default useViewController;
