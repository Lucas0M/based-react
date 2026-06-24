import { useState } from "react";
import { InputAdd } from "./components/InputAdd";

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

  return (
    <div>
      <InputAdd
        onAdd={(value) =>
          setList([
            ...list,
            {
              id: (list.length + 1).toString(),
              label: value,
              complete: false,
            },
          ])
        }
      />

      <div>
        <ol>
          {list.map((listItem) => (
            <li key={listItem.id}>
              {listItem.label}

              {listItem.complete ? "Concluido" : ""}
              <button
                onClick={() =>
                  setList([
                    ...list.map((item) => ({
                      ...item,
                      complete:
                        item.id === listItem.id
                          ? !item.complete
                          : item.complete,
                    })),
                  ])
                }
              >
                {listItem.complete ? "Desconcluir" : "Concluir"}
              </button>
              <button
                onClick={() =>
                  setList([...list.filter((item) => item.id !== listItem.id)])
                }
              >
                Remover
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
