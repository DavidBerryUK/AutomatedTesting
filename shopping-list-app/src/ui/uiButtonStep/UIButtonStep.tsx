import useClassBuilder from "./hooks/UseClassBuilder";
import useViewController from "./hooks/UseViewController";

interface IProperties {
  /**
   * Label to display on the button, idealy a single character
   */
  label: string;
  /**
   * is the leading edge rounded
   */
  leadingRounded?: boolean;
  /**
   * is the trailing edge rounded
   */
  trailingRounded?: boolean;
  /**
   * optional test id
   */
  testId?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Button to be used with the stepper control. Note that
 * the button can be rounded on the leading or trailing edge.
 *
 * note that the properties are destructured to allow
 * default values for leadingRounded and trailingRounded
 */
const UIButtonStep: React.FC<IProperties> = ({ label, leadingRounded = false, trailingRounded = false, testId, onClick }: IProperties) => {
  /********************************************/
  /* build Styles                             */
  /********************************************/
  const className = useClassBuilder(leadingRounded, trailingRounded);

  /********************************************/
  /* View Controller                          *
  /********************************************/
  const { handleOnClickEvent } = useViewController(onClick);

  /********************************************/
  /* Template                                 */
  /********************************************/
  return (
    <button className={className} type="button" data-testid={testId} onClick={handleOnClickEvent}>
      {label}
    </button>
  );
};

export default UIButtonStep;
