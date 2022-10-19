export const Button = ({ children, onClick, type }) => {
  if (type === 'primary')
    return (
      <button className='bg-black text-white p-4 rounded-full' onClick={onClick}>
        {children}
      </button>
    );
  else
    return (
      <button className='bg-white text-black p-4 rounded-full border border-black' onClick={onClick}>
        {children}
      </button>
    );
};
