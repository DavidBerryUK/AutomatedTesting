import { expect, jest } from "@storybook/jest";
import { userEvent, within } from "@storybook/testing-library";
import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import UIStepper from "../UIStepper";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "UI/UIStepper",
  component: UIStepper,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    value: { control: { type: "number", min: 0, max: 30, step: 1 } },
    onValueChanged: { action: "value changed" },
  },
} satisfies Meta<typeof UIStepper>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    value: 2,
  },
};

export const InteractiveExample: React.FC = () => {
  const [value, setValue] = useState(1);
  return (
    <UIStepper
      value={value}
      onValueChanged={(newValue) => {
        setValue(newValue);
      }}
    />
  );
};

export const TestSubtractButton: Story = {
  args: {
    buttonSubtractTestId: "stepper-button-subtract",
    value: 10,
    onValueChanged: jest.fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const refButton = canvas.getByTestId("stepper-button-subtract");
    await userEvent.click(refButton);
    await expect(TestSubtractButton.args.onValueChanged).toHaveBeenCalledWith(9);
  },
};

export const TestSubtractMinZero: Story = {
  args: {
    buttonSubtractTestId: "stepper-button-subtract",
    value: 0,
    onValueChanged: jest.fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const refButton = canvas.getByTestId("stepper-button-subtract");
    await userEvent.click(refButton);
    // should not be called when value is zero
    await expect(TestSubtractMinZero.args.onValueChanged).toHaveBeenCalledTimes(0);
  },
};

export const TestAddButton: Story = {
  args: {
    buttonAddTestId: "stepper-button-add",
    value: 10,
    onValueChanged: jest.fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const refButton = canvas.getByTestId("stepper-button-add");
    await userEvent.click(refButton);
    await expect(TestAddButton.args.onValueChanged).toHaveBeenCalledWith(11);
  },
};

export const TestTypeNewValue: Story = {
  args: {
    txtValueTestId: "text-number-demo",
    value: 10,
    onValueChanged: jest.fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const refTextBox = canvas.getByTestId("text-number-demo");
    await userEvent.type(refTextBox, "5", {
      initialSelectionStart: 0,
      initialSelectionEnd: 1000,
    });
    await expect(TestTypeNewValue.args.onValueChanged).toHaveBeenCalledWith(5);
  },
};
