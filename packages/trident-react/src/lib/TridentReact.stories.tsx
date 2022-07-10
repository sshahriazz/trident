import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TridentReact } from './TridentReact';

export default {
  component: TridentReact,
  title: 'TridentReact',
} as ComponentMeta<typeof TridentReact>;

const Template: ComponentStory<typeof TridentReact> = (args) => (
  <TridentReact {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
