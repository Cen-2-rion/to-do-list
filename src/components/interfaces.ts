export interface Task {
    text: string,
    completed: boolean,
}

export interface InputProps {
    addTask: (text: string) => void,
}

export interface ListProps {
    tasks: Task[],
    toggleTask: (index: number) => void,
    deletetask: (index: number) => void,

}

export interface ItemProps {
    task: Task,
    index: number,
    toggleTask: (index: number) => void,
    deleteTask: (index: number) => void,
}
