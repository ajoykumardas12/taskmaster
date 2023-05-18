interface ButtonPropsT{
    variant: "big" | "small"
    onButtonClick: () => void
    children: React.ReactNode
}

function Button({variant, onButtonClick, children}: ButtonPropsT) {
    return (
        <button onClick={() =>onButtonClick()}>
            {children}
        </button>
    );
}

export default Button;