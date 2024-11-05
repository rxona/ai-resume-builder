"use client";
// import * as pdfjsLib from "pdfjs-dist/build/pdf.min.mjs";
// import * as pdfjsWorker from "pdfjs-dist/build/pdf.worker.min.mjs";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default async function extractTextFromPdf(fileUrl: string) {
  //   const pdfjsLib = await import("pdfjs-dist/build/pdf.min.mjs");
  //   // @ts-expect-error fix later
  //   const pdfjsWorker = await import("pdfjs-dist/build/pdf.worker.min.mjs");
  //   pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;
  const pdf = await pdfjs.getDocument(fileUrl).promise;
  let fullText = "";
  for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
    const page = await pdf.getPage(pageNumber);
    const textContent = await page.getTextContent();
    // @ts-expect-error from
    const pageText = textContent.items.map((item) => item.str).join(" ");
    fullText += pageText + "\n";
  }
  return fullText;
}
