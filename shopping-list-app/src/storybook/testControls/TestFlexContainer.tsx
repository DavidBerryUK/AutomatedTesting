/**
 * very simple test child control used for testing rendering
 * @returns
 */

import { ReactNode } from "react";

interface IProperties {
  children: ReactNode;
}

const TestFlexContainer: React.FC<IProperties> = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        backgroundColor: "#fff",
        border: "solid 1px #eee",
        width: 800,

        borderRadius: 2,
      }}
    >
      {props.children}
    </div>
  );
};

export default TestFlexContainer;
