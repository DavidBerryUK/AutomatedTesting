import { expect, jest } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import UIButtonStep from "../UIButtonStep";
import { userEvent, within } from "@storybook/testing-library";

/**
 * Setup Story Documentation
 */
const meta = {
  title: "UI/UIButtonStep",
  component: UIButtonStep,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "onClick" },
  },
} satisfies Meta<typeof UIButtonStep>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default story
 */
export const Default: Story = {
  args: {
    label: "+",
  },
};

/**
 * Story showing leading rounded edge
 */
export const LeadingRounded: Story = {
  args: {
    label: "-",
    leadingRounded: true,
  },
};

/**
 * Story showing trailing rounded edge
 */
export const TrailingRounded: Story = {
  args: {
    label: "+",
    trailingRounded: true,
  },
};

/**
 * Automated story
 * - test when button is clicked that a onClick event is raised
 */
export const TestClickEvent: Story = {
  args: {
    label: "+",
    trailingRounded: true,
    testId: "stepper-button",
    onClick: jest.fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const refButton = canvas.getByTestId("stepper-button");
    await userEvent.click(refButton);
    await expect(TestClickEvent.args.onClick).toHaveBeenCalled();
  },
};
