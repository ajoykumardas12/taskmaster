import { useState } from "react";

interface CheckboxPropsT{
    defaultCheckedValue: boolean
    onCheckedChange: () => void
    children: React.ReactNode
}

function Checkbox({defaultCheckedValue, onCheckedChange, children}: CheckboxPropsT) {
    const [isChecked, setIsChecked] = useState(defaultCheckedValue);

    const handleCheckedChange = () => {
        const updatedChecked = !isChecked;
        setIsChecked(updatedChecked);

        onCheckedChange();
    }

    return (
        <div className="flex items-center gap-3" onClick={handleCheckedChange}>
            <div className={`w-5 h-5 rounded-full ${!isChecked && `border border-border`} ${isChecked && `bg-accent`}`}></div>
            <div className="w-[15rem] sm:w-[22.5rem] line-clamp-1">
                {children}
            </div>
        </div>
    );
}

export default Checkbox;