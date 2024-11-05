import { TextInput } from "@/components/form/text-input";
import { Textarea } from "@/components/ui/textarea";

export function PersonalDetails() {
  return (
    <>
      <TextInput label="Name" name="personalDetails.name" />
      <TextInput label="Phone Number" name="personalDetails.phoneNumber" />
      <TextInput label="Location" name="personalDetails.location" />
      <TextInput as={Textarea} label="Summary" name="summary" rows={6} />
    </>
  );
}
