import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Input } from "./Input";

const meta = {
  title: "Components/Core/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onChange: { action: "changed" },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    type: "text",
    placeholder: "Example Text",
    label: "Example Label",
    sublabel: "Example Sublabel.",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Example Password",
    label: "Example Label",
    sublabel: "Example Sublabel.",
  },
};

export const Email: Story = {
  args: {
    type: "email",
    placeholder: "Example Email",
    label: "Example Label",
    sublabel: "Example Sublabel.",
  },
};

export const Success: Story = {
  args: {
    type: "email",
    placeholder: "Example Email",
    label: "Example Label",
    sublabel: "Example success input.",
    statusCode: 200,
  },
};

export const Error: Story = {
  args: {
    type: "email",
    placeholder: "Example Email",
    label: "Example Label",
    sublabel: "Example error input.",
    statusCode: 400,
  },
};

export const ServerError: Story = {
  args: {
    type: "email",
    placeholder: "Example Email",
    label: "Example Label",
    sublabel: "Service unavailable at the moment.",
    statusCode: 500,
  },
};
