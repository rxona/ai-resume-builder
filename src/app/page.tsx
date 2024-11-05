"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Upload, FileText } from "lucide-react";
import { useRouter } from "next/navigation";

export default function HomePageComponent() {
  return (
    <>
      <h2 className="text-3xl font-bold mb-6">Welcome back!</h2>
      <p className="text-xl mb-8">What would you like to do today?</p>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Upload Resume</CardTitle>
            <CardDescription>
              Upload an existing resume to edit or format
            </CardDescription>
          </CardHeader>
          <CardContent>
            <label htmlFor="upload-resume" className="cursor-pointer">
              <Button className="w-full" asChild>
                <span>
                  <Upload className="mr-2 h-4 w-4" /> Upload Resume
                </span>
              </Button>
              <ResumeFileInput />
            </label>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Create New Resume</CardTitle>
            <CardDescription>
              Start building your resume from scratch
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">
              <FileText className="mr-2 h-4 w-4" /> Create New Resume
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

function ResumeFileInput() {
  const router = useRouter();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.[0]) {
      const searchParams = new URLSearchParams({
        from: URL.createObjectURL(event.target.files[0]),
      });
      router.push(`/new?${searchParams.toString()}`);
    }
  };

  return (
    <input
      id="upload-resume"
      type="file"
      className="hidden"
      accept=".pdf"
      onChange={handleInputChange}
    />
  );
}
