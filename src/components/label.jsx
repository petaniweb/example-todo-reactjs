import cn from "@libs/util";

function Label({ text, count, className }) {
  return (
    <p className={cn("text-white text-base font-normal", className)}>
      {text} - {count}
    </p>
  );
}

export default Label;
