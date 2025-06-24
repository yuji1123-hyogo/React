import PropTypes from 'prop-types';

export function Member() {}
function TypeProp(props) {
  console.log(props);
  return <p>結果はコンソールを確認してください。</p>;
}

TypeProp.propTypes = {
  prop1: PropTypes.instanceOf(Member),
  prop2: PropTypes.oneOf(['男性', '女性', 'その他']),
  prop3: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
  prop4: PropTypes.arrayOf(PropTypes.number),
  prop5: PropTypes.objectOf(PropTypes.number),
  prop6: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    sex: PropTypes.oneOf(['男性', '女性', 'その他']),
  }),
  prop7: PropTypes.exact({
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    sex: PropTypes.oneOf(['男性', '女性', 'その他']),
  }),
};

export default TypeProp;
