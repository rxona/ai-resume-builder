import { Controller, get } from "react-hook-form";
import { Input, InputProps } from "../ui/input";
import { Label } from "../ui/label";
import { cn } from "@/lib/utils";

export type Props = InputProps & {
  name: string;
  label: string;
};

export function MonthInput({ name, label, ...props }: Props) {
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
              <Input
                {...props}
                {...field}
                id={name}
                name={name}
                type="month"
                value={
                  field.value && `${field.value.year}-0${field.value.month}`
                }
                onChange={(e) => {
                  console.log(e.target.value);

                  const [strYear, strMonth] = e.target.value.split("-");

                  const value = {
                    year: Number(strYear),
                    month: Number(strMonth),
                  };

                  console.log(value);

                  field.onChange(value);
                }}
              />
            </>
          );
        }}
      />
    </div>
  );
}
