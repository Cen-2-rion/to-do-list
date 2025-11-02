export interface Task {
    text: string,
    completed: boolean,
}

export interface InputProps {
    onAdd: (text: string) => void,
}

type ActionsProps = {
    onToggle: (index: number) => void,
    onDelete: (index: number) => void,
}

export interface ListProps extends ActionsProps {
    tasks: Task[],
}

export interface ItemProps extends ActionsProps {
    task: Task,
    index: number,
}
