import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className='bg-blue-500 rounded-xl p-4 text-white'>
            <h2 className='text-center'>
                <span className='text-7xl font-extrabold'>{price}</span>
                <span className='text-3xl'>/mon</span>
            </h2>
            <h3 className='text-3xl text-center my-8'>{name}</h3>
            {/* <ul>
                {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul> */}
            {
                features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
            }
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object.isRequired
};

export default PriceOption;
