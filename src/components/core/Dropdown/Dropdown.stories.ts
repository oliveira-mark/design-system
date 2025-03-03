import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Dropdown } from "./Dropdown";

const meta = {
  title: "Components/Core/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onSelect: { action: "select" },
  },
  args: { onSelect: fn() },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      { value: "First Option", label: "First Option" },
      { value: "Second Option", label: "Second Option" },
      { value: "Third Option", label: "Third Option" },
      { value: "Fourth Option", label: "Fourth Option" },
      { value: "Fifth Option", label: "Fifth Option" },
    ],
    placeholder: "Select an option",
  },
};
