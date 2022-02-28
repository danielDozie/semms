const Button = ({buttonText}:any) => {
  return(
    <div className="w-full px-4 py-4 font-light text-white bg-black rounded-sm cursor-pointer text-md hover:text-myGray hover:bg-gray-800 dark:text-black dark:bg-white hover:dark:bg-myGray">{buttonText}</div>
  );
};

export default Button;