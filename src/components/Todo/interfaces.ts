export interface TodoProps {
  todo: ITodo;
  onDelete: (todoDelete: ITodo) => void;
  onModify: (id: string, modifiedName: string) => void;
}

export interface ITodo {
  name: string;
  timeStamp: string;
  id: string;
}
