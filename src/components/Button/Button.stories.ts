import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {
    primary: "filled",
    size: "ultra-small",
    label: "Example Text",
  },
};

export const Light: Story = {
  args: {
    primary: "light",
    size: "ultra-small",
    label: "Example Text",
  },
};

export const Outline: Story = {
  args: {
    primary: "outline",
    size: "ultra-small",
    label: "Example Text",
  },
};

export const UltraSmall: Story = {
  args: {
    primary: "filled",
    size: "ultra-small",
    label: "Example Text",
  },
};

export const ExtraSmall: Story = {
  args: {
    primary: "filled",
    size: "extra-small",
    label: "Example Text",
  },
};

export const Small: Story = {
  args: {
    primary: "filled",
    size: "small",
    label: "Example Text",
  },
};

export const Medium: Story = {
  args: {
    primary: "filled",
    size: "medium",
    label: "Example Text",
  },
};

export const Large: Story = {
  args: {
    primary: "filled",
    size: "large",
    label: "Example Text",
  },
};

export const ExtraLarge: Story = {
  args: {
    primary: "filled",
    size: "extra-large",
    label: "Example Text",
  },
};
