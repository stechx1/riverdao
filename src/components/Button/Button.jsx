export const Button = ({ children, onClick, type, size }) => {
  if (type === 'primary')
    return (
      <button className={`bg-black text-white ${size === "small"? "py-2 px-4 text-sm":"p-4"} rounded-full hover:drop-shadow-lg`} onClick={onClick}>
        {children}
      </button>
    );
  else
    return (
      <button className='bg-white text-black p-4 rounded-full border border-black hover:drop-shadow-sm' onClick={onClick}>
        {children}
      </button>
    );
};
