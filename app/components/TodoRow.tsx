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
        <div className="flex justify-between items-center gap-4 group w-full h-8">
            <div className="text-lg sm:text-xl">
                <Checkbox defaultCheckedValue={todoItem.isCompleted} onCheckedChange={() => toggleCompleted(todoItem.id)}>
                    {todoItem.title}
                </Checkbox>
            </div>
            <div className="block min-[500px]:hidden group-hover:block">
                <Button variant="small" onButtonClick={() => deleteTodo(todoItem.id)} >
                    X
                </Button>
            </div>
        </div>
    );
}

export default TodoRow;