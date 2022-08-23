import PropTypes from 'prop-types';

export default function Button({ color, text, onClick }) {
    return (
        <button onClick={onClick} className={color}> {text} </button> //props에서 들어온 클래스명과 텍스트 쓰겠다고 지정.
    );
}

Button.propTypes = {
    text: PropTypes.string
}
Button.defaultProps = {
    text: 'btn'
}