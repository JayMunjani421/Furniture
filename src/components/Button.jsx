const Button = ({ type, onClick, className = "", bordered, children }) => {
  return (
    <button type={type} onClick={onClick} className={`px-5 sm:px-5.5 md:px-6 lg:px-7 xl:px-8 2xl:px-9 font-dm-sans text-xs md:text-sm xl:text-base 2xl:text-xl leading-none md:cursor-pointer ${className} ${bordered ? "border py-2.25 sm:py-2.5 md:py-2.75 lg:py-3.25 xl:py-3.75 2xl:py-4.25" : "py-2.5 sm:py-2.75 md:py-3 lg:py-3.5 xl:py-4 2xl:py-4.5"}`}>{children}</button>
  );
};

export default Button;
