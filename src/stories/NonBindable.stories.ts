import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import Button from './button.component';

export default {
  title: 'Example/NonBindable',
  decorators: [
    moduleMetadata({
      declarations: [Button],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<Button> = (args: Button) => ({
  props: args,
  template: `
    <div ngNonBindable>
      <storybook-button></storybook-button>
    </div>
  `,
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};