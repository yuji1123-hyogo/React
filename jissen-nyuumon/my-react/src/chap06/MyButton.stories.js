import { action } from '@storybook/addon-actions';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import MyButton from './MyButton';

export default {
  title: 'MyApp/MyButton',
  component: MyButton,
  // args: {
  //   label: 'Push!!',
  // },

  argTypes: {
    size: {
      control: { type: 'select' },
    },
    // handleClick: { action: 'clicked' }
  },

  // argTypesプロパティだけで型を宣言
  // argTypes: {
  //   primary: {
  //     type: 'boolean',
  //     description: 'Primaryカラーを有効にするか',
  //   },
  //   backgroundColor: {
  //     type: 'string',
  //     description: '背景色'
  //   },
  //   size: {
  //     type: {
  //       name: 'enum',
  //       value: ['small', 'medium', 'large']
  //     },
  //     control: { type: 'select' },
  //     description: 'ボタンの大きさ'
  //   },
  //   label: {
  //     type: 'string',
  //     description: 'ボタンのキャプション'
  //   },
  //   onClick: {
  //     type: 'function',
  //     description: 'clickハンドラー',
  //   }
  // },

  // parameters: {
  //   backgrounds: {
  //     values: [
  //       { name: 'ghostwhite', value: '#f8f8ff' },
  //       { name: 'aquamarine', value: '#7fffd4' },
  //       { name: 'coral', value: '#ff7f50' },
  //     ],
  //   },
  // }

  // decorators: [
  //   Story => (
  //     <div style={{
  //       height: 150,
  //       display: 'flex',
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //       backgroundColor: '#ccc',
  //     }}>
  //       <Story />
  //     </div>
  //   ),
  // ],

  // parameters: {
  //   layout: 'centered',
  // },

  // tags: ['autodocs'],
};

export const Index = {
  // render: () => <MyButton primary size="medium" label="ボタン"
  //   onClick={() => console.log('Hello, Storybook!!')}/>

  // render: args => <MyButton {...args} />,
  args: {
    primary: true,
    size: 'medium',
    label: 'ボタン',
    onClick: () => console.log('Hello, Storybook!!')
    // handleClick: e => {
    //   action('clicked')(e, new Date());
    // },
  },
  // play: async ({ args, canvasElement }) => {
  //   const canvas = within(canvasElement);
  //   const button = canvas.getByRole('button');
  //   userEvent.click(button);
  //   userEvent.click(button);
  //   expect(args.onClick).toHaveBeenCalledTimes(2);
  // },
  // parameters: {
  //   backgrounds: {
  //     values: [
  //       { name: 'ghostwhite', value: '#f8f8ff' },
  //       { name: 'aquamarine', value: '#7fffd4' },
  //       { name: 'coral', value: '#ff7f50' },
  //     ],
  //   },
  // }

};

export const White = {
  // render: () => <MyButton size="small" label="ボタン"
  //   backgroundColor="#fff" />

  args: {
    size: 'small',
    label: 'ボタン',
    backgroundColor: '#fff',
    // handleClick: action('clicked'),
  }
};

export const Yellow = {
  args: {
    ...White.args,
    backgroundColor: 'lightyellow'
  }
};