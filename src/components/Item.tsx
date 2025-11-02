import type { ItemProps } from "./interfaces";

export default function Item({ task, index, onToggle, onDelete }: ItemProps) {
    return (
        <li className={`item ${task.completed ? 'done' : ''}`}>
            <span onClick={() => onToggle(index)}>{task.text}</span>
            <button onClick={() => onDelete(index)}>Удалить</button>
        </li>
    );
}
