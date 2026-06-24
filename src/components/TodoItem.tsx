interface ITodoItemProps {
  id: string;
  label: string;
  complete: boolean;
  onComplete(id: string): void;
  onDelete(id: string): void;
}

export const TodoItem = ({
  id,
  label,
  complete,
  onComplete,
  onDelete,
}: ITodoItemProps) => {
  return (
    <div>
      <li key={id}>
        {label}

        {complete ? "Concluido" : ""}
        <button onClick={() => onComplete(id)}>
          {complete ? "Desconcluir" : "Concluir"}
        </button>
        <button onClick={() => onDelete(id)}>Remover</button>
      </li>
    </div>
  );
};
