import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Navbar } from "./Navbar";

const meta = {
  title: "Components/Block/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
    links: [
      { active: true, label: "Home", url: "#" },
      { active: false, label: "About", url: "#" },
      { active: false, label: "Contact", url: "#" },
    ],
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    user: {
      name: "Jane Doe",
    },
  },
};

export const LoggedOut: Story = {};
