interface ButtonPropsT{
    variant: "big" | "small"
    onButtonClick: () => void
    children: React.ReactNode
}

function Button({variant, onButtonClick, children}: ButtonPropsT) {
    if(variant === "big"){
        return (
            <button 
                className="bg-accent px-8 py-3 flex items-center justify-center text-white rounded-lg "
                onClick={() =>onButtonClick()}
            >
                {children}
            </button>
        )
    }else if(variant === "small"){
        return (
            <button 
                className="bg-accent px-3 py-1 flex items-center justify-center text-white rounded-lg "
                onClick={() =>onButtonClick()}
            >
                {children}
            </button>
        )
    }else{
        return (
            <div>Invalid button variant</div>
        )
    }

}

export default Button;