import Main from ".";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Main",
  component: Main
  //args: {}
} as ComponentMeta<typeof Main>;

export const Basic: ComponentStory<typeof Main> = () => <Main />;
//Basic.args = {}

export const Default: ComponentStory<typeof Main> = () => <Main />;
