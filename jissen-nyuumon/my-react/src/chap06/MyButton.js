import PropTypes from 'prop-types';
import '../stories/button.css';

/**
 * 属性の設定に応じて種々のボタンを生成
 */
export default function MyButton ({
    primary = false,
    backgroundColor = null,
    size = 'medium',
    label = 'Button',
    // handleClick,
    ...props
  }) {
  const mode = primary ?
    'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      // onClick={handleClick}
      {...props}
    >
      {label}
    </button>
  );
};

// Propsの型情報を宣言
  /**
   * Primaryカラーを有効にするか
   */
MyButton.propTypes = {
  primary: PropTypes.bool,
  /**
   * 背景色
   */
  backgroundColor: PropTypes.string,
  /**
   * ボタンの大きさ
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * ボタンのキャプション
   */
  label: PropTypes.string.isRequired,
  /**
   * clickハンドラー
   */
  onClick: PropTypes.func,
  // handleClick: PropTypes.func,
};