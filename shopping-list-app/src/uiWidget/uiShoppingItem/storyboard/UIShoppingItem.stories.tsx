import { useState } from "react";
import TestDataFactoryShoppingItems from "src/testDataFactory/TestDataFactoryShoppingItems";
import type { Meta, StoryObj } from "@storybook/react";
import UIShoppingItem from "../UIShoppingItem";
import customViewPortConfig from "src/storybook/viewportConfig/customViewPortConfig";

/**
 * Setup Story Documentation
 */
const meta = {
  title: "Widget/UIShoppingItem",
  component: UIShoppingItem,
  parameters: {
    layout: "centered",
    viewport: {
      viewports: customViewPortConfig,
      defaultViewport: "DesktopStandard",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof UIShoppingItem>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default story
 */
export const Default: Story = {
  args: {
    showSwitchComplete: true,
    showButtonDelete: true,
    showButtonAdd: true,
    value: TestDataFactoryShoppingItems.getApples(),
  },
};

export const NewItem: Story = {
  args: {
    showButtonAdd: true,
    value: TestDataFactoryShoppingItems.getApples(),
  },
};

export const EditItem: Story = {
  args: {
    showButtonDelete: true,
    showSwitchComplete: true,
    value: TestDataFactoryShoppingItems.getApples(),
  },
};

/**
 * Interactive example
 */
export const InteractiveExample: React.FC = () => {
  const [value, setValue] = useState(TestDataFactoryShoppingItems.getApples());
  return (
    <UIShoppingItem
      value={value}
      showButtonAdd={true}
      showButtonDelete={true}
      showSwitchComplete={true}
      onValueChanged={(newValue) => {
        setValue(newValue);
      }}
    />
  );
};
