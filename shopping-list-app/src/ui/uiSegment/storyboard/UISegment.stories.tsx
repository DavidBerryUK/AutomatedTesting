import type { Meta, StoryObj } from "@storybook/react";
import UISegment from "../UISegment";
import SegmentOption from "../models/SegmentOption";
import { useState } from "react";

/**
 * Setup Story Documentation
 */
const meta = {
  title: "UI/UISegment",
  component: UISegment,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof UISegment>;

export default meta;
type Story = StoryObj<typeof meta>;

const segmentOptions = [new SegmentOption("A", "Alphabetic"), new SegmentOption("C", "Completed"), new SegmentOption("D", "Date")];

/**
 * Default story
 */
export const Default: Story = {
  args: {
    value: "A",
    options: segmentOptions,
  },
};

export const InteractiveExample: React.FC = () => {
  const [value, setValue] = useState(segmentOptions[0]);
  return (
    <UISegment
      value={value.code}
      options={segmentOptions}
      onChange={(option) => {
        setValue(option);
      }}
    />
  );
};
