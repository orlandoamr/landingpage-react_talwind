function FormAction({caption, onClick}){
    let myClasses = [
      "w-full",
      "flex",
      "items-center",
      "justify-center",
      "px-8",
      "py-4",
      "my-4",
      "border",
      "border-transparent",
      "text-base",
      "font-medium",
      "rounded-lg",
      "text-white",
      "bg-indigo-600",
      "hover:bg-indigo-400",
      "md:py-4",
      "md:text-lg",
      "md:px-10"
    ];
    return(
      <button
        onClick={onClick}
        className={myClasses.join(" ")}
      >
        {caption}
      </button>
    );
  }
  
  export default FormAction;