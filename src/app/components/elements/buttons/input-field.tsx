interface InputFieldProps {
  label: string;
  type: "text" | "password" | "email";
  id: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputField({
  label,
  type,
  id,
  placeholder,
  value,
  onChange,
}: InputFieldProps) {
  return (
    <div className="w-100">
      <input
        type={type}
        className="w-full h-10 border border-gray-300 p-2"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
