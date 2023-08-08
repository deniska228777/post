import '../Button.css';

function Button(onClick, ...props) {
    return(
        <input {...onClick} {...props} className='btn2'/>
    );
};

export default Button;