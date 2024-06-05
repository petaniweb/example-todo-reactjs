function Button({ onClick, icon }) {
  return (
    <button
      className="bg-violet-400 hover:bg-violet-500 text-gray-800 font-bold px-2 rounded-[10px]"
      onClick={onClick}
    >
      {icon}
    </button>
  );
}

export default Button;
