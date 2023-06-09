"use client"
import { TodoItemT } from "@/types/types";
import { FormEvent, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "./Button";

interface AddTodoPropsT{
    addTodo: (newTodo: TodoItemT) => void
}

function AddTodo({addTodo}: AddTodoPropsT) {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (inputRef.current) {
            if(inputRef.current.value){
                const newTodoTitle = inputRef.current.value;
                
                const newTodo = {
                    "id": uuidv4(),
                    "title": newTodoTitle,
                    "isCompleted": false
                }
    
                // Add todo
                addTodo(newTodo);
    
                // Set input blank
                inputRef.current.value = ""; 
            }           
        }
        
    }

    return (
        <form className="flex gap-2" onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="newTodo" 
                id="" 
                placeholder="Add task here..."
                autoComplete="off"
                className="bg-inputBg p-2 w-52 min-[400px]:w-full outline-accent rounded"
                ref={inputRef}
            />
            <Button variant="big" onButtonClick={() => handleSubmit} >
                Add
            </Button>
        </form>
    );
}

export default AddTodo;