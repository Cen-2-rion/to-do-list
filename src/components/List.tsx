import type { ListProps } from "./interfaces";
import Item from "./Item";

export default function List({ tasks, onToggle, onDelete}: ListProps) {
    if (tasks.length === 0) return <p>Добавьте какую-нибудь задачу!</p>
    
    return (
        <ul>
            {tasks.map((task, i) => (
                <Item
                    key={i}
                    index={i}
                    task={task}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
}
