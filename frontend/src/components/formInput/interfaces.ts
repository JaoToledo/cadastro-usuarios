import type { InputHTMLAttributes } from "react";
import type { FieldValues, Control, Path } from "react-hook-form";

export interface AuthFormInputProps<T extends FieldValues> extends InputHTMLAttributes<HTMLInputElement> {
  control: Control<T>
  name: Path<T>
  withIcon?: boolean
  icon?: React.ReactNode
  type?: string
}