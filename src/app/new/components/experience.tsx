import { MonthInput } from "@/components/form/month-input";
import { TextInput } from "@/components/form/text-input";
import { useFieldArray } from "react-hook-form";

export function Experience() {
  const { fields } = useFieldArray({ name: "experiences" });

  return (
    <div className="space-y-8">
      {fields.map((field, i) => (
        <div key={field.id} className="space-y-3">
          <TextInput name={`experiences.${i}.jobTitle`} label="Job Title" />
          <TextInput
            name={`experiences.${i}.entityName`}
            label="Company or Project Name"
          />
          <div className="grid grid-cols-2 gap-x-4">
            <MonthInput
              name={`experiences.${i}.startDate`}
              label="Start Date"
            />
            <MonthInput name={`experiences.${i}.endDate`} label="End Date" />
          </div>
          {/* <TextInput name={`experiences.${i}.entityName`} label="Summary" rows={6} /> */}
        </div>
      ))}
    </div>
  );
}
