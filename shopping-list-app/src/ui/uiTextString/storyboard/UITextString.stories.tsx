import { jest, expect } from "@storybook/jest";
import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import UITextString from "../UITextString";

const meta = {
  title: "UI/UITextString",
  component: UITextString,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: { control: { type: "number", min: 0, max: 30, step: 1 } },
    onValueChange: { action: "value changed" },
  },
} satisfies Meta<typeof UITextString>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "hello",
  },
};

export const InteractiveExample: React.FC = () => {
  const [value, setValue] = useState("hello");
  return (
    <UITextString
      value={value}
      onValueChange={(newValue) => {
        setValue(newValue);
      }}
    />
  );
};

export const TestClearTextBox: Story = {
  args: {
    testId: "text-string-demo",
    value: "hello",
    onValueChange: jest.fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const refTextBox = canvas.getByTestId("text-string-demo");
    await userEvent.clear(refTextBox);
    await expect(TestClearTextBox.args.onValueChange).toHaveBeenCalledWith("");
  },
};

export const TestTypeNewValue: Story = {
  args: {
    testId: "text-string-demo",
    value: "hello",
    onValueChange: jest.fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const refTextBox = canvas.getByTestId("text-string-demo");
    await userEvent.type(refTextBox, "x", {
      initialSelectionStart: 0,
      initialSelectionEnd: 1000,
    });
    await expect(TestTypeNewValue.args.onValueChange).toHaveBeenCalledWith("x");
  },
};
