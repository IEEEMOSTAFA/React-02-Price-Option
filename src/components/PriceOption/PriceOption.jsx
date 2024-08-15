import PropTypes from 'prop-types';

const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div>
            <h2>
                <span className='text-7xl'>{price}</span>
                <span className='text-3xl'>/mon</span>
            </h2>
            <h3>{name}</h3>
            <ul>
                {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object.isRequired
};

export default PriceOption;
