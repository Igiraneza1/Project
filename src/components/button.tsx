type ButtonProps = {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

function Button({ label, onClick, type = "button" }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="px-4 py-2 rounded bg-orange-600 text-white hover:bg-orange-700"
    >
      {label}
    </button>
  );
}

export default Button;
