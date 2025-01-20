import { Resume } from "@/schemas/resume";
import React, { Fragment } from "react";

export default function ProfessionalResume({ data }: { data: Resume }) {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal p-4">
      <div className="container mx-auto p-8 max-w-3xl bg-white shadow-lg">
        <header>
          <h1 className="text-4xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2 mb-4">
            {data.personalDetails.name}
          </h1>
          <div className="text-gray-600 mb-6">
            <p>
              Email: your.email@example.com | Phone:{" "}
              {data.personalDetails.phoneNumber}
            </p>
            <p>
              Location: {data.personalDetails.location} | LinkedIn:
              linkedin.com/in/yourprofile
            </p>
          </div>
        </header>

        <main>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Summary
            </h2>
            <p className="text-gray-700">{data.summary}</p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Experience
            </h2>
            {data.experiences.map((exp, i) => (
              <div key={i} className="mb-4">
                <p className="font-bold text-gray-800">
                  {exp.jobTitle}, {exp.entityName}
                </p>
                <p className="text-gray-600 italic">
                  {exp.startDate.month}/{exp.startDate.year} -{" "}
                  {exp.endDate
                    ? `${exp.endDate.month}/${exp.endDate.year}`
                    : "Present"}
                </p>
                <ul className="list-disc pl-5 mt-2 text-gray-700">
                  {exp.accomplishments.map((accomplishment, i) => (
                    <li key={i}>{accomplishment}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Education
            </h2>
            {data.educations.map((education, i) => (
              <Fragment key={i}>
                <p className="font-bold text-gray-800">
                  {education.degree} - {education.fieldOfStudy}
                </p>
                <p className="text-gray-700">
                  {education.institution_name},{" "}
                  {education.endDate?.year ?? "Present"}
                </p>
              </Fragment>
            ))}
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Skills
            </h2>
            <ul className="list-disc pl-5 text-gray-700">
              {data.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}
