import type { Meta, StoryObj } from "@storybook/react";
import UISegmentSortOrder from "../UISegmentSortOrder";
import EnumListSortOrder from "src/enum/EnumListSortOrder";
import { useState } from "react";

/**
 * Setup Story Documentation
 */
const meta = {
  title: "Widget/UISegmentSortOrder",
  component: UISegmentSortOrder,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof UISegmentSortOrder>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default story
 */
export const Default: Story = {
  args: {
    value: EnumListSortOrder.Name,
  },
};

/**
 * Interactive example
 */
export const InteractiveExample: React.FC = () => {
  const [value, setValue] = useState(EnumListSortOrder.Name);
  return (
    <UISegmentSortOrder
      value={value}
      onValueChanged={(newValue) => {
        setValue(newValue);
      }}
    />
  );
};
