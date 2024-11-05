import { Controller, get } from "react-hook-form";
import { Input, InputProps } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef, createElement } from "react";

// type TextInputProps = InputProps & {
//   as: Input | TextArea
//   name: string;
//   label: string;
// };

type Input = typeof Input | typeof Textarea;

export type Props<T extends Input> = {
  name: string;
  label: string;
  as?: T;
};

export function TextInput<T extends Input>({
  as: InputComponent = Input as T,
  name,
  label,
  ...props
}: Props<T> & Omit<ComponentPropsWithoutRef<T>, keyof Props<T>>) {
  return (
    <div className="space-y-2">
      <Controller
        name={name}
        render={({ field, formState }) => {
          const error = get(formState.errors, name);
          return (
            <>
              <Label className={cn(error && "text-destructive")} htmlFor={name}>
                {label}
              </Label>
              {createElement(InputComponent as React.ElementType, {
                id: name,
                // shadow: true,
                // color: error && 'failure',
                // helperText: error?.message,
                ...props,
                ...field,
              })}

              {/* <Input
                {...props}
                {...field}
                id={name}
                name={name}
              /> */}
            </>
          );
        }}
      />
    </div>
  );
}
