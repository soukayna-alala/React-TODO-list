export interface TodoProps {
  todo: ITodo;
  onDelete: (todoDelete: ITodo) => void;
}

export interface ITodo {
  name: string;
  timeStamp: string;
}
