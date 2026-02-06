interface ButtonProps {
  label: string;
  onClick?: () => void;
}

function Button({ label, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
    >
      {label}
    </button>
  );
}

export default Button;
