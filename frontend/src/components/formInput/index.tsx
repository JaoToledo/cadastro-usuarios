import { Controller, type FieldValues } from "react-hook-form";
import type { AuthFormInputProps } from "./interfaces";

export function AuthFormInput<T extends FieldValues>({
  control,
  name,
  icon,
  withIcon,
  type,
  ...rest
}: AuthFormInputProps<T>) {
  return (
    <Controller
    control={control}
    name={name}
    render={({ field, fieldState}) => (
      <div className="relative w-full">
        {withIcon && (
        <span className="absolute mt-[5px]  left-[20px] ">
        {icon}  
        </span>
      )}
      <input
      {...field}
      {...rest}
      type={type}
      className={`border rounded-[50px] px-[70px] h-[50px] outline-none w-full
        placeholder:opacity-40
        placeholder:font-roboto
        placeholder:text-[24px]
        placeholder:leading-[16px]
        placeholder:font-normal
        placeholder:-tracking-[-0.3rem]
        shadow-[0px_04px_5px_1px_rgba(0,0,0,0.15)]
        ${fieldState.error ? "border-red-500" : "border-gray-50"}
        `} 
        />
        </div>
    )}
    />
  )
}