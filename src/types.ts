import { PropsWithChildren } from "react";
import { FieldValues, UseFormReturn } from "react-hook-form";

export interface SubmitHandler<T extends FieldValues> {
  (data: T, methods: UseFormReturn<T>): void | Promise<void>;
}

export type PropsWithClassName = {
  className?: string;
};

export type PropsWithChildrenAndClassName = PropsWithChildren &
  PropsWithClassName;
