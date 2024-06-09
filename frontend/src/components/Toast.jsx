import PropTypes from 'prop-types';

const Toast = ({message, show, onClose, className}) => {
  return (
    <div className={`fixed bottom-2 transition-opacity duration-300 ${show ? 'opacity-100' : 'opacity-0'}`}>
      <div className={className}>
        <span>{message}</span>
        <button className="ml-4 bg-transparent text-white" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
};

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  className: PropTypes.func.isRequired,
};

export default Toast;