import type { Meta, StoryObj } from "@storybook/react";
import UIShoppingListApp from "../UIShoppingListApp";
import customViewPortConfig from "src/storybook/viewportConfig/customViewPortConfig";

/**
 * Setup Story Documentation
 */
const meta = {
  title: "Widget/UIShoppingListApp",
  component: UIShoppingListApp,
  parameters: {
    layout: "top",
    viewport: {
      viewports: customViewPortConfig,
      defaultViewport: "DesktopStandard",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof UIShoppingListApp>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default story
 */
export const Default: Story = {
  args: {},
};
