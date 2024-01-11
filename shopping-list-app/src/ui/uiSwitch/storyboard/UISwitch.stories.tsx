import type { Meta, StoryObj } from "@storybook/react";
import UISwitch from "../UISwitch";
import { useState } from "react";

/**
 * Setup Story Documentation
 */
const meta = {
  title: "UI/UISwitch",
  component: UISwitch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof UISwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default story
 */
export const Default: Story = {
  args: {
    value: true,
  },
};

export const SwitchedOn: Story = {
  args: {
    value: true,
  },
};

export const SwitchedOff: Story = {
  args: {
    value: false,
  },
};

export const InteractiveExample: React.FC = () => {
  const [value, setValue] = useState(true);
  return (
    <UISwitch
      value={value}
      onValueChange={(newValue) => {
        setValue(newValue);
      }}
    />
  );
};
