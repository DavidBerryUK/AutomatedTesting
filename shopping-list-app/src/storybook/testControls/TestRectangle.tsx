interface IProperties {
  colorNo: number;
  testId?: string;
}

/**
 * very simple test child control used for testing rendering
 * @returns
 */
const TestRectangle: React.FC<IProperties> = (props) => {
  const colors = [
    "#F5CD7A",
    "#556EE6",
    "#E66868",
    "#F78FB3",
    "#3EC1D3",
    "#303A52",
    "#F7D794",
    "#778BEB",
    "#EB8686",
    "#F8A5C2",
    "#64CDDB",
    "#596174",
  ];
  const index = props.colorNo % colors.length;

  return <div data-testid={props.testId} style={{ backgroundColor: colors[index], width: 150, height: 150, borderRadius: 2 }} />;
};

export default TestRectangle;
