import TestDataFactoryShoppingList from "src/testDataFactory/TestDataFactoryShoppingList";
import type { Meta, StoryObj } from "@storybook/react";
import UIShoppingList from "../UIShoppingList";
import { useState } from "react";
import customViewPortConfig from "src/storybook/viewportConfig/customViewPortConfig";

/**
 * Setup Story Documentation
 */
const meta = {
  title: "Widget/UIShoppingList",
  component: UIShoppingList,
  parameters: {
    layout: "centered",
    viewport: {
      viewports: customViewPortConfig,
      defaultViewport: "DesktopStandard",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof UIShoppingList>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default story
 */
export const Default: Story = {
  args: {
    collection: TestDataFactoryShoppingList.get(),
  },
};

/**
 * Interactive example
 */
export const InteractiveExample: React.FC = () => {
  const [collection, setCollection] = useState(TestDataFactoryShoppingList.get());
  return (
    <UIShoppingList
      collection={collection}
      onCollectionChanged={(newValue) => {
        setCollection(newValue);
      }}
      onItemDeleted={(item) => {
        const clone = collection.clone();
        clone.removeItem(item);
        setCollection(clone);
      }}
    />
  );
};
