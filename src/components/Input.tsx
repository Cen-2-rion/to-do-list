import { useState } from "react";
import type { InputProps } from "./interfaces";

export default function Input({ onAdd }: InputProps) {
    const [value, setValue] = useState('');
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        onAdd(value);
        setValue('');
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <input value={value} onChange={(e) => setValue(e.target.value)} placeholder="Напишите задачу..." />
            <button type="submit">Добавить</button>
        </form>
    );
}
