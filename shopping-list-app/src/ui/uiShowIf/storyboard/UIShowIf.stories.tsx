import type { Meta, StoryObj } from "@storybook/react";
import UIShowIf from "../UIShowIf";
import TestColorSwatch from "../../../storybook/testControls/TestColorSwatch";

/**
 * Setup Story Documentation
 */
const meta = {
  title: "UI/UIShowIf",
  component: UIShowIf,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof UIShowIf>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default story
 */
export const Default: Story = {
  args: {
    value: true,
    children: <TestColorSwatch />,
  },
};

export const Show: Story = {
  args: {
    value: true,
    children: <TestColorSwatch />,
  },
};

export const HideByDefault: Story = {
  args: {
    children: <TestColorSwatch />,
  },
};

export const HideByExplicitValue: Story = {
  args: {
    value: false,
    children: <TestColorSwatch />,
  },
};
