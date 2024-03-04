const Button = (props) => {
    return (
      <div className="bg-gray-50 min-h-[200px] flex items-center justify-center">
        <button className="px-6 py-2 font-medium bg-purple-500 text-white w-fit transition-all shadow-[3px_3px_0px_gray] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
          {props.text}
        </button>
      </div>
    );
  };
  
  export default Button;