import PropTypes from 'prop-types';

const Card = ({bg = 'bg-gray-100', children}) => {
	return (
		<div className={`${bg} p-6 rounded-lg shadow-md`}>
			{children}
		</div>
	);
};

Card.propTypes = {
    bg: PropTypes.string,
    children: PropTypes.element,
}

export default Card;
