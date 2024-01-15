import { expect, jest } from "@storybook/jest";
import { userEvent, within } from "@storybook/testing-library";
import TestFlexContainer from "src/storybook/testControls/TestFlexContainer";
import type { Meta, StoryObj } from "@storybook/react";
import UIButton from "../UIButton";

/**
 * Simple Button control with multiple formatting Options
 */
const meta = {
  title: "UI/UIButton",
  component: UIButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "onClick" },
  },
} satisfies Meta<typeof UIButton>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default story
 */
export const Default: Story = {
  args: {
    label: "press me",
  },
};

/**
 * Disabled
 */
export const Disabled: Story = {
  args: {
    label: "disabled",
    disabled: true,
  },
};

/**
 * Button Size Small
 */
export const SizeSmall: Story = {
  args: {
    label: "Small",
    small: true,
  },
};

/**
 * Button Size Large
 */
export const SizeLarge: Story = {
  args: {
    label: "Large",
    large: true,
  },
};

/**
 * Button Size ExtraLarge
 */
export const SizeExtraLarge: Story = {
  args: {
    label: "Extra Large",
    extraLarge: true,
  },
};

/**
 * Button Width Standard
 */
export const WidthStandard: Story = {
  args: {
    label: "Standard",
    widthStandard: true,
  },
};

/**
 * Button Width Wide
 */
export const WidthWide: Story = {
  args: {
    label: "Wide",
    widthWide: true,
  },
};

/**
 * Button Width Wide
 */
export const WidthExtraWide: Story = {
  args: {
    label: "Extra Wide",
    widthExtraWide: true,
  },
};

/**
 * Font Fold
 */
export const FontBold: Story = {
  args: {
    label: "press me",
    bold: true,
  },
};

/**
 * Text Sizes
 */
export const TextSmall: Story = {
  args: {
    label: "press me",
    textSmall: true,
  },
};

export const TextLarge: Story = {
  args: {
    label: "press me",
    textLarge: true,
  },
};

export const TextExtraLarge: Story = {
  args: {
    label: "press me",
    textExtraLarge: true,
  },
};

export const MarginExamples: Story = {
  args: {
    label: "",
  },
  render: (args) => (
    <TestFlexContainer>
      <UIButton ml5 mt2 label="Margin Left and Top" />
      <UIButton ml5 mr5 label="Margin Right and Left" />
      <UIButton m5 label="Margin All" />
      <UIButton m5 label="Margin All" />
      <UIButton mb5 mr2 label="Margin Bottom And Right" />
      <UIButton mb5 ml2 label="Margin Bottom And Left" />
    </TestFlexContainer>
  ),
};

/**
 * Automated story
 * - test when button is clicked that a onClick event is raised
 */
export const TestClickEvent: Story = {
  args: {
    label: "press me",
    testId: "button",
    onClick: jest.fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const refButton = canvas.getByTestId("button");
    await userEvent.click(refButton);
    await expect(TestClickEvent.args.onClick).toHaveBeenCalled();
  },
};
