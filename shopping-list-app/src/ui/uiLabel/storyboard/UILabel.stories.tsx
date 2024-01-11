import type { Meta, StoryObj } from "@storybook/react";
import UILabel from "../UILabel";

/**
 * Setup Story Documentation
 */
const meta = {
  title: "UI/UILabel",
  component: UILabel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof UILabel>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default story
 */
export const Default: Story = {
  args: {
    label: "Forename",
    children: <input />,
  },
};

export const WidthExtraSmall: Story = {
  args: {
    label: "",
    children: <input />,
  },
  render: (args) => (
    <div>
      <div>
        <UILabel extraSmall label="f.name">
          <input />
        </UILabel>
        <UILabel extraSmall label="s.name">
          <input />
        </UILabel>
      </div>
    </div>
  ),
};

export const WidthSmall: Story = {
  args: {
    label: "",
    children: <input />,
  },
  render: (args) => (
    <div>
      <div>
        <UILabel small label="f.name">
          <input />
        </UILabel>
        <UILabel small label="s.name">
          <input />
        </UILabel>
      </div>
    </div>
  ),
};

export const WidthMedium: Story = {
  args: {
    label: "",
    children: <input />,
  },
  render: (args) => (
    <div>
      <div>
        <UILabel medium label="forename">
          <input />
        </UILabel>
        <UILabel medium label="surname">
          <input />
        </UILabel>
      </div>
    </div>
  ),
};

export const WidthWide: Story = {
  args: {
    label: "",
    children: <input />,
  },
  render: (args) => (
    <div>
      <div>
        <UILabel wide label="Given Name">
          <input />
        </UILabel>
        <UILabel wide label="Family Name">
          <input />
        </UILabel>
      </div>
    </div>
  ),
};

export const ExtraWidthWide: Story = {
  args: {
    label: "",
    children: <input />,
  },
  render: (args) => (
    <div>
      <div>
        <UILabel extraWide label="Given Name (forename)">
          <input />
        </UILabel>
        <UILabel extraWide label="Family Name (surname)">
          <input />
        </UILabel>
      </div>
    </div>
  ),
};

/**
 * Sample
 */
export const SampleForm: Story = {
  args: {
    label: "",
    children: <input />,
  },
  render: (args) => (
    <div>
      <div>
        <UILabel medium label="forename">
          <input />
        </UILabel>
        <UILabel medium label="surname">
          <input />
        </UILabel>
        <UILabel medium label="address line 1">
          <input />
        </UILabel>
        <UILabel medium label="address line 2">
          <input />
        </UILabel>
        <UILabel medium label="address line 3">
          <input />
        </UILabel>
        <UILabel medium label="postcode">
          <input />
        </UILabel>
      </div>
    </div>
  ),
};
