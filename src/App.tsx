import { useState } from "react";
import { InputAdd } from "./components/InputAdd";
import { TodoItem } from "./components/TodoItem";

type List = {
  id: string;
  label: string;
  complete: boolean;
};

export function App() {
  const [list, setList] = useState<List[]>([
    { id: "1", label: "Fazer Cafe", complete: false },
    { id: "2", label: "Fazer Cafe", complete: false },
    { id: "3", label: "Fazer Almoco", complete: false },
    { id: "4", label: "Fazer Janta", complete: false },
  ]);

  const handleAdd = (value: string) => {
    setList([
      ...list,
      {
        id: (list.length + 1).toString(),
        label: value,
        complete: false,
      },
    ]);
  };

  const handleComplete = (id: string) => {
    setList([
      ...list.map((item) => ({
        ...item,
        complete: item.id === id ? !item.complete : item.complete,
      })),
    ]);
  };

  const handleDelete = (id: string) => {
    setList([...list.filter((item) => item.id !== id)]);
  };

  return (
    <div>
      <InputAdd onAdd={handleAdd} />

      <div>
        <ol>
          {list.map((listItem) => (
            <TodoItem
              key={listItem.id}
              {...listItem}
              onComplete={handleComplete}
              onDelete={handleDelete}
            />
          ))}
        </ol>
      </div>
    </div>
  );
}
