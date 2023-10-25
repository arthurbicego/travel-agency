/* eslint-disable react/prop-types */
const Button = (props) => {
  return (
    <div>
      <button
        className={` ${props.backgroundColor} text-black rounded-full px-8 py-2 font-medium hover:bg-blue-300 hover:text-white transition-all`}
      >
        {props.title}
      </button>
    </div>
  );
};

export default Button;
