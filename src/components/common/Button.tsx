const Button = ({buttonText}:any) => {
  return(
    <div className="w-full py-4 px-4 text-md text-white bg-black hover:text-myGray hover:bg-gray-800 dark:text-black dark:bg-white hover:dark:bg-myGray font-light rounded-sm cursor-pointer">{buttonText}</div>
  );
};

export default Button;