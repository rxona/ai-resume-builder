"use client";
import FormProvider from "@/components/form/provider";
import ProfessionalResume from "@/components/resumes/Professional";
import extractTextFromPdf from "@/lib/extract-text-from-pdf";
import { Resume, resumeSchema } from "@/schemas/resume";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { FormTabs } from "./components/form-tabs";
import { EnhanceButton } from "./components/enhance-button";
import { DownloadButton } from "./components/download-button";

function NewResume() {
  return null;
}

function ResumeViewer() {
  const { watch } = useFormContext<Resume>();
  const resume = watch();

  console.log(resume);

  return <ProfessionalResume data={resume} />;
}

export default function NewResumePage() {
  const searchParams = useSearchParams();
  const fileUrl = searchParams.get("from");
  const [initialResume, setInitialResume] = useState<null | Resume>(null);

  console.log(initialResume);

  useEffect(() => {
    if (fileUrl && !initialResume) {
      console.log("parsing resume");

      extractTextFromPdf(fileUrl)
        .then((text) => {
          return fetch("/api/parse", {
            method: "post",
            body: JSON.stringify({ resume: text }),
          }).then((r) => r.json());
        })
        .then(setInitialResume)
        .catch(console.error);
    }
  }, [fileUrl]);

  return initialResume ? (
    <>
      <div className="grid grid-cols-2 gap-4">
        <FormProvider
          validationSchema={resumeSchema}
          defaultValues={initialResume}
          onSubmit={() => {}}
          beforeForm={<ResumeViewer />}
        >
          <div>
            <div className="flex justify-end space-x-2 mb-4">
              <DownloadButton />
              <EnhanceButton />
            </div>
            <FormTabs />
            <NewResume />
          </div>
        </FormProvider>
      </div>
    </>
  ) : (
    "Loading..."
  );
}

const d = {
  personalDetails: {
    name: "Claraficia Renata",
    phoneNumber: "+6281218064827",
    location: "Central Jakarta, Indonesia",
  },
  summary:
    "Recent graduate with a 1 year experience as a Human Resources intern in retail and palm oil companies. A competent, organized, and dependable individual with a strong work ethic and great communication skills. Passionate in the area of Human Resources.",
  experiences: [
    {
      jobTitle: "Recruitment Intern",
      entity_name: "PT SMART Tbk (Sinarmas Agribusiness and Food)",
      startDate: {
        month: 5,
        year: 2023,
      },
      endDate: null,
      accomplishments: [
        "Handled end-to-end recruitment process (job posting, sourcing, screening, psychological test, interview, offering, onboarding) for internship/apprenticeship candidates from across departments (Procurement, FAT, IT, Engineering, HR, Data Analyst, HSE, HRBP, etc.).",
        "Assisted on recruitment process for entry-level, mid-level, and senior-level across departments (FAT, IT, HR, Data Analyst, HSE, Operation Excellence, Policy & Governance, QC, CoE, Commercial Admin, etc.).",
        "Responsible for the recruitment team's administrative tasks; new employee administration, handover of MT program participants' diploma, flight ticket form, stamp duty usage report and purchase request form, etc.",
      ],
    },
    {
      jobTitle: "Talent Acquisition & Organizational Development Intern",
      entity_name: "PT MAP Aktif Adiperkasa Tbk (MAP Active)",
      startDate: {
        month: 8,
        year: 2022,
      },
      endDate: {
        month: 1,
        year: 2023,
      },
      accomplishments: [
        "Carried out end-to-end recruitment process (job posting, sourcing, screening, psychological test, interview, offering) for Finance Department (FAT, Consolidation & Reporting, Central Data Management, Inventory Control) with various job levels ranging from entry-level, mid-level, and senior-level.",
        "Created and updated the organizational structure of all departments (monthly-based) on actual vs MPP as well as structure reporting and dissemination of changes to the organizational structure with related parties, if any.",
        "Managed and updated employee data (changes in title/division/department) to be updated in HRIS.",
        "Managed, followed-up, and updated the 2023 employee goal setting submission status; achieved 100% completed status by the end of the year.",
      ],
    },
  ],
  educations: [
    {
      institution_name: "Trisakti School of Management",
      degree: "Bachelor's Degree, Human Resource Management",
      fieldOfStudy: "",
      startDate: {
        month: 8,
        year: 2019,
      },
      endDate: {
        month: 2,
        year: 2023,
      },
      achievement: [
        "Merit Scholarship Awardee since the 2nd year of college for successfully maintaining a high CGPA.",
      ],
    },
  ],
  skills: [
    "Language: Bahasa Indonesia (Native) | English (Professional Proficiency)",
    "Hard Skill: Ms. Office (Word, Excel, PowerPoint, Outlook), Canva",
    "Soft Skill: Interpersonal | Communication | Time Management | Teamwork | Critical Thinking & Problem Solving",
  ],
  certifications: [
    {
      name: "Human Capital Staff",
      issuingOrganization: "Badan Nasional Sertifikasi Profesi (BNSP)",
    },
    {
      name: "TOEFL ITP",
      issuingOrganization: "",
    },
    {
      name: "Certified Risk Analyst",
      issuingOrganization: "Lembaga Sertifikasi Profesi Pasar Modal (LSP-PM)",
    },
    {
      name: "Human Resource Management",
      issuingOrganization: "TÜV Rheinland Group",
    },
  ],
};
