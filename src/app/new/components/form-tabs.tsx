import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PersonalDetails } from "./personal-details";
import { Experience } from "./experience";

export function FormTabs() {
  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList>
        <TabsTrigger value="account">Profile</TabsTrigger>
        <TabsTrigger value="experience">Experience</TabsTrigger>
        <TabsTrigger value="education">Education</TabsTrigger>
        <TabsTrigger value="skills">Skills</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <PersonalDetails />
      </TabsContent>
      <TabsContent value="experience">
        <Experience />
      </TabsContent>
      <TabsContent value="education">Change your password here.</TabsContent>
      <TabsContent value="skills">Change your password here.</TabsContent>
    </Tabs>
  );
}
