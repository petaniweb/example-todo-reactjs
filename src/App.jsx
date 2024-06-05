import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

import InputText from "@components/InputText";
import Button from "@components/button";
import PlusIcon from "@assets/plusIcon";
import Label from "@components/label";
import Card from "@components/card";
import { DONE_STATUS, TODO_STATUS } from "@constants/string";


function App() {
  const [tasks, setTasks] = useState([]);
  const inputRef = useRef(null);

  const onClickButtonAdd = () => {
    const objectTask = {
      id: uuidv4(),
      text: inputRef.current.getValue(),
      status: TODO_STATUS,
    };

    setTasks((prevState) => [...prevState, objectTask]);
    inputRef.current.setEmpty();
  };

  const onClickButtonDone = (id) => {
    setTasks((prevState) => {
      const prev = prevState;
      const indexTask = prev.findIndex((t) => t.id === id);
      prev[indexTask].status = DONE_STATUS;

      return [...prev];
    });
  };

  const onClickButtonDelete = (id) => {
    setTasks((prevState) => prevState.filter((t) => t.id !== id));
  };

  const doneTasks = tasks.filter((t) => t.status === DONE_STATUS);
  const todoTasks = tasks.filter((t) => t.status === TODO_STATUS);
  return (
    <div className="bg-zinc-950 w-full h-screen flex justify-center items-center">
      <div className="bg-zinc-900 w-[583px] h-[758px] rounded-2xl px-16 py-14 overflow-hidden">
        <div className="flex justify-between gap-2">
          <InputText id={"input-text"} ref={inputRef} />
          <Button icon={<PlusIcon />} onClick={onClickButtonAdd} />
        </div>
        <div className="overflow-auto max-h-[600px] mt-6 pb-5 scrollbar-thin scrollbar-thumb-zinc-950 scrollbar-track-zinc-900 pr-1">
          <div className="">
            <Label
              text={"Tasks to do"}
              count={todoTasks.length}
              className="mb-4"
            />
            <div className="grid gap-4">
              {todoTasks.map((task, i) => (
                <Card
                  task={task}
                  key={`task-todo-${i}`}
                  actionDelete={onClickButtonDelete}
                  actionDone={onClickButtonDone}
                />
              ))}
            </div>
          </div>
          <div className="mt-16">
            <Label text={"Done"} count={doneTasks.length} className="mb-4" />
            <div className="grid gap-4">
              {doneTasks.map((task, i) => (
                <Card
                  task={task}
                  key={`task-todo-${i}`}
                  actionDelete={onClickButtonDelete}
                  actionDone={onClickButtonDone}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
