import { jest, expect } from "@storybook/jest";
import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import UITextNumber from "../UITextNumber";
import { userEvent, within } from "@storybook/testing-library";

const meta = {
  title: "UI/UITextNumber",
  component: UITextNumber,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: { control: { type: "number", min: 0, max: 30, step: 1 } },
    onValueChanged: { action: "value changed" },
  },
} satisfies Meta<typeof UITextNumber>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 2,
  },
};

export const InteractiveExample: React.FC = () => {
  const [value, setValue] = useState(1);
  return (
    <UITextNumber
      value={value}
      onValueChanged={(newValue) => {
        setValue(newValue);
      }}
    />
  );
};

export const TestClearTextBox: Story = {
  args: {
    testId: "text-number-demo",
    value: 10,
    onValueChanged: jest.fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const refTextBox = canvas.getByTestId("text-number-demo");
    await userEvent.clear(refTextBox);
    await expect(TestClearTextBox.args.onValueChanged).toHaveBeenCalledWith(0);
  },
};

export const TestTypeNewValue: Story = {
  args: {
    testId: "text-number-demo",
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
