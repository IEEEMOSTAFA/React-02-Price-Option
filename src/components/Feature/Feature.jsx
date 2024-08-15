import PropTypes from 'prop-types';

const Feature = ({feature}) => {
    return (
        <div>

            <p>{feature}</p>
        </div>
    );
};
Feature.propTypes = {
    option: PropTypes.string
};
export default Feature;