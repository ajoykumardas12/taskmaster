import { TodoItemT } from "@/types/types";
import Button from "./Button";

interface TodoRowPropsT{
    todoItem: TodoItemT
    toggleCompleted: (id: string) => void
    deleteTodo: (id: string) => void
}

function TodoRow({todoItem, toggleCompleted, deleteTodo}: TodoRowPropsT) {
    return (
        <div className="flex justify-between items-center gap-4">
            <div>
                {todoItem.title}
            </div>
            <Button variant="small" onButtonClick={() => deleteTodo(todoItem.id)} >
                X
            </Button>
        </div>
    );
}

export default TodoRow;