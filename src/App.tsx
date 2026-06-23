import { useState } from "react";

type List = {
  id: string;
  label: string;
};

export function App() {
  const [value, setValue] = useState("");
  const [list, setList] = useState<List[]>([
    { id: "1", label: "Fazer Cafe" },
    { id: "2", label: "Fazer Cafe" },
    { id: "3", label: "Fazer Almoco" },
    { id: "4", label: "Fazer Janta" },
  ]);

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
      />
      <button
        onClick={() => {
          setList([
            ...list,
            { id: (list.length + 1).toString(), label: value },
          ]);
          setValue("");
        }}
      >
        Adicionar
      </button>

      <ol>
        {list.map((listItem) => (
          <li key={listItem.id}>{listItem.label}</li>
        ))}
      </ol>
    </div>
  );
}
