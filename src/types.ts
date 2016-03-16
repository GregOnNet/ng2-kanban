export interface KanbanState {
    boards: Board[];
    activeBoard: number;
}

export interface Board {
    title: string;
    columns: Column[];
}

export interface Column {
    title: string;
}
