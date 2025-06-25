interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full py-3 text-foreground bg-background rounded-[15px] text-4xl cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}
