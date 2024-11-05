import {
  FieldValues,
  FormProvider as HookFormProvider,
  useForm,
  useFormState,
  type UseFormProps,
} from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler } from "@/types";
// import Alert from "../Alert";
import { ReactNode } from "react";
import { getResponseErrorMessage } from "@/lib/utils";

const FormProvider = <F extends FieldValues, T extends z.ZodType<object>>({
  id,
  validationSchema,
  onSubmit,
  beforeForm,
  className = "",
  children,
  ...props
}: React.PropsWithChildren<
  UseFormProps<F> & {
    id?: string;
    validationSchema: T;
    onSubmit: SubmitHandler<F>;
    className?: string;
    beforeForm?: ReactNode;
  }
>) => {
  const methods = useForm({
    ...props,
    resolver: zodResolver(validationSchema),
  });

  return (
    <HookFormProvider {...methods}>
      <>
        {beforeForm}
        <form
          id={id}
          onSubmit={methods.handleSubmit(async (values) => {
            try {
              await onSubmit(values, methods);
            } catch (err: unknown) {
              console.error(err);
              methods.setError("root.globalError", {
                message: getResponseErrorMessage(err),
              });
            }
          })}
          className={`grid gap-4 ${className}`}
        >
          {/* <FormErrorMessage /> */}
          {children}
        </form>
      </>
    </HookFormProvider>
  );
};

// export const FormErrorMessage = () => {
//   const {
//     isSubmitting,
//     errors: { root },
//   } = useFormState();

//   const errMessage = root?.globalError?.message;

//   return (
//     !isSubmitting &&
//     errMessage && (
//       <Alert color="failure" message="Oops!" additionalMessage={errMessage} />
//     )
//   );
// };

export default FormProvider;
