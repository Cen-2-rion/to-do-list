import type { ItemProps } from "./interfaces";
import doneIcon from "../assets/done.png";
import deleteIcon from "../assets/delete.png";

export default function Item({ task, index, onToggle, onDelete }: ItemProps) {
    return (
        <li className={`item ${task.completed ? "done" : ""}`}>
            <div className="wrapper" onClick={() => onToggle(index)}>
                <img src={doneIcon} alt="done" className={`done-icon ${task.completed ? "visible" : ""}`} />
                <span>{task.text}</span>
            </div>
            <img src={deleteIcon} alt="delete" className="delete-icon" onClick={() => onDelete(index)} />
        </li>
    );
}
