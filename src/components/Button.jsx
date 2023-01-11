const Button = ({ text, buttonType }) => (
  <button
    type={buttonType}
    className="bg-blue-700 hover:bg-blue-900 text-white py-2 px-6 rounded-md"
  >
    {text}
  </button>
);

export default Button;
