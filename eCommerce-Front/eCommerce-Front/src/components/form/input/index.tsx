import { Path, FieldValues, UseFormRegister } from "react-hook-form"


type TInputProps<TFieldValue extends FieldValues> = {
    label: string;
    name: Path<TFieldValue>;
    type?: string;
    register: UseFormRegister<TFieldValue>;
    error: string;
}

const Input = <TFieldValue extends FieldValues>({ label, name, type = "text", register, error }: TInputProps<TFieldValue>) => {
    return (
        <div className="flex flex-col my-4">
            <label className="text-gray-700 text-lg">{label}</label>
            <input type={type} className="mt-2 p-3 border border-gray-300 rounded text-lg text-gray-900" {...register(name)} />
            <span className="text-red-400 italic">{error}</span>
        </div>
    )
}

export default Input;