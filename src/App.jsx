import { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import InputText from "@components/InputText";
import Button from "@components/button";
import PlusIcon from "@assets/plusIcon";
import Label from "@components/label";
import Card from "@components/card";
import { DONE_STATUS, TODO_STATUS } from "@constants/string";

import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "@services/taskServices";

function App() {
  const [tasks, setTasks] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const onClickButtonAdd = async () => {
    try {
      const objectTask = {
        description: inputRef.current.getValue(),
      };

      await createTask(objectTask);

      fetchTasks();
    } catch (error) {
      console.error("Error create tasks", error);
    }
  };

  const onClickButtonDone = async (task) => {
    try {
      if (task.status === DONE_STATUS) {
        task.status = TODO_STATUS;
      } else {
        task.status = DONE_STATUS;
      }

      await updateTask(task);

      fetchTasks();
    } catch (error) {
      console.error("Error delete tasks", error);
    }
  };

  const onClickButtonDelete = async (id) => {
    try {
      await deleteTask(id);
      fetchTasks();
    } catch (error) {
      console.error("Error delete tasks", error);
    }
  };

  const fetchTasks = async () => {
    try {
      const { data } = await getTasks();
      setTasks(data);
    } catch (error) {
      console.error("Error fetching tasks", error);
    }
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
                  actionDone={() => onClickButtonDone(task)}
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
                  actionDone={() => onClickButtonDone(task)}
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
