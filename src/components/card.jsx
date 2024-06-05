import cn from "@libs/util";

import CheckIcon from "@assets/checkIcon";
import TrashIcon from "@assets/trashIcon";
import { DONE_STATUS, TODO_STATUS } from "@constants/string";

function RenderAction({ status, id }, actionDelete, actionDone) {
  const isTodo = status == TODO_STATUS;

  return (
    <div className="flex gap-3 items-center">
      {isTodo && (
        <CheckIcon
          className="text-violet-400 hover:text-violet-500 hover:cursor-pointer"
          onClick={() => actionDone(id)}
        />
      )}

      <TrashIcon
        className={cn(
          "text-violet-400 hover:text-violet-500 hover:cursor-pointer",
          !isTodo && "text-emerald-300 hover:text-emerald-400 line-through"
        )}
        onClick={() => actionDelete(id)}
      />
    </div>
  );
}

function Card({ task, actionDelete, actionDone }) {
  if (!task) return null;

  const isDone = task?.status == DONE_STATUS;
  return (
    <div className="flex justify-between bg-zinc-950 rounded-[10px] p-6">
      <span
        className={cn(
          "text-violet-400 text-base font-normal",
          isDone && "text-emerald-300 line-through"
        )}
      >
        {task.text}
      </span>
      {RenderAction(
        { status: task.status, id: task.id },
        actionDelete,
        actionDone
      )}
    </div>
  );
}

export default Card;
