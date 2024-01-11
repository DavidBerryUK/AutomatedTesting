import type { Meta, StoryObj } from "@storybook/react";
import UIBox from "../UIBox";
import TestFlexContainer from "src/storybook/testControls/TestFlexContainer";
import TestRectangle from "src/storybook/testControls/TestRectangle";

/**
 * The UIBox is used to assist in page and control layout.
 */
const meta = {
  title: "UI/UIBox",
  component: UIBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof UIBox>;

export default meta;
type Story = StoryObj<typeof meta>;

const colorNumbers = [0, 1, 2, 4, 5, 6, 7, 8, 9, 10];

/**
 * Default story
 */
export const Default: Story = {
  render: (args) => (
    <TestFlexContainer>
      {colorNumbers.map((colorNo) => (
        <UIBox {...args} key={colorNo}>
          <TestRectangle colorNo={colorNo} />
        </UIBox>
      ))}
    </TestFlexContainer>
  ),
};

export const Margin1: Story = {
  render: (args) => (
    <TestFlexContainer>
      {colorNumbers.map((colorNo) => (
        <UIBox m1 key={colorNo}>
          <TestRectangle colorNo={colorNo} />
        </UIBox>
      ))}
    </TestFlexContainer>
  ),
};

export const Margin2: Story = {
  render: (args) => (
    <TestFlexContainer>
      {colorNumbers.map((colorNo) => (
        <UIBox m2 key={colorNo}>
          <TestRectangle colorNo={colorNo} />
        </UIBox>
      ))}
    </TestFlexContainer>
  ),
};

export const Margin3: Story = {
  render: (args) => (
    <TestFlexContainer>
      {colorNumbers.map((colorNo) => (
        <UIBox m3 key={colorNo}>
          <TestRectangle colorNo={colorNo} />
        </UIBox>
      ))}
    </TestFlexContainer>
  ),
};

export const Margin4: Story = {
  render: (args) => (
    <TestFlexContainer>
      {colorNumbers.map((colorNo) => (
        <UIBox m4 key={colorNo}>
          <TestRectangle colorNo={colorNo} />
        </UIBox>
      ))}
    </TestFlexContainer>
  ),
};

export const Margin5: Story = {
  render: (args) => (
    <TestFlexContainer>
      {colorNumbers.map((colorNo) => (
        <UIBox m5 key={colorNo}>
          <TestRectangle colorNo={colorNo} />
        </UIBox>
      ))}
    </TestFlexContainer>
  ),
};

export const Padding1: Story = {
  render: (args) => (
    <TestFlexContainer>
      {colorNumbers.map((colorNo) => (
        <UIBox p1 key={colorNo}>
          <TestRectangle colorNo={colorNo} />
        </UIBox>
      ))}
    </TestFlexContainer>
  ),
};

export const Padding2: Story = {
  render: (args) => (
    <TestFlexContainer>
      {colorNumbers.map((colorNo) => (
        <UIBox p2 key={colorNo}>
          <TestRectangle colorNo={colorNo} />
        </UIBox>
      ))}
    </TestFlexContainer>
  ),
};

export const Padding3: Story = {
  render: (args) => (
    <TestFlexContainer>
      {colorNumbers.map((colorNo) => (
        <UIBox p3 key={colorNo}>
          <TestRectangle colorNo={colorNo} />
        </UIBox>
      ))}
    </TestFlexContainer>
  ),
};

export const Padding4: Story = {
  render: (args) => (
    <TestFlexContainer>
      {colorNumbers.map((colorNo) => (
        <UIBox p4 key={colorNo}>
          <TestRectangle colorNo={colorNo} />
        </UIBox>
      ))}
    </TestFlexContainer>
  ),
};

export const Padding5: Story = {
  render: (args) => (
    <TestFlexContainer>
      {colorNumbers.map((colorNo) => (
        <UIBox p5 key={colorNo}>
          <TestRectangle colorNo={colorNo} />
        </UIBox>
      ))}
    </TestFlexContainer>
  ),
};
