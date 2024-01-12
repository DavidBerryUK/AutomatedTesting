import { nanoid } from "nanoid";
import { useState } from "react";

const useViewController = (onValueChanged?: (value: boolean) => void) => {
  // create unique value for control, this
  // is used to link the INPUT and LABEL control together
  const [controlId] = useState(nanoid());

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
    controlId,
    handleOnValueChanged,
  };
};

export default useViewController;
