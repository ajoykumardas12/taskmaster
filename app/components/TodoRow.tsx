import { TodoItemT } from "@/types/types";
import Button from "./Button";
import Checkbox from "./Checkbox";

interface TodoRowPropsT{
    todoItem: TodoItemT
    toggleCompleted: (id: string) => void
    deleteTodo: (id: string) => void
}

function TodoRow({todoItem, toggleCompleted, deleteTodo}: TodoRowPropsT) {
    return (
        <div className="flex justify-between items-center gap-4 group w-72 h-8">
            <div className="text-xl">
                <Checkbox defaultCheckedValue={todoItem.isCompleted} onCheckedChange={() => toggleCompleted(todoItem.id)}>
                    {todoItem.title}
                </Checkbox>
            </div>
            <div className="block sm:hidden group-hover:block">
                <Button variant="small" onButtonClick={() => deleteTodo(todoItem.id)} >
                    X
                </Button>
            </div>
        </div>
    );
}

export default TodoRow;