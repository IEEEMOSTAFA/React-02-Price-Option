import { TailSpin } from 'react-loader-spinner'

const Spinner = () => {
    return (
        //     <Audio
        //     height="80"
        //     width="80"
        //     radius="9"
        //     color="green"
        //     ariaLabel="three-dots-loading"
        //     wrapperStyle
        //     wrapperClass
        //   />
        <div className='items-center ml-9'>
            <TailSpin
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>


    );
};

export default Spinner;