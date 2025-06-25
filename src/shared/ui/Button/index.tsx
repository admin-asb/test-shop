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
      className={`w-full py-3 max-lg:py-2 text-foreground bg-background rounded-15 text-4xl max-lg:text-2xl max-md:text-lg cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}
