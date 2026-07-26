import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export const downloadReport = (resume) => {
  const doc = new jsPDF();

  doc.setFontSize(20);
  doc.text("AI Resume Analyzer Report", 14, 18);

  doc.setFontSize(12);

  doc.text(`Resume : ${resume.resume_name}`, 14, 32);
  doc.text(`ATS Score : ${resume.ats_score}%`, 14, 40);

  autoTable(doc, {
    startY: 50,
    head: [["Section", "Details"]],
    body: [
      ["Matched Skills", (resume.matched_skills || []).join(", ")],
      ["Missing Skills", (resume.missing_skills || []).join(", ")],
      ["Strengths", (resume.analysis?.strengths || []).join("\n")],
      ["Weaknesses", (resume.analysis?.weaknesses || []).join("\n")],
      ["Suggestions", (resume.analysis?.suggestions || []).join("\n")],
      [
        "Interview Questions",
        (resume.analysis?.interview_questions || []).join("\n"),
      ],
    ],
    styles: {
      fontSize: 10,
      cellPadding: 3,
      overflow: "linebreak",
    },
    headStyles: {
      fillColor: [255, 123, 44],
    },
  });

  const y = doc.lastAutoTable.finalY + 10;

  doc.setFontSize(14);
  doc.text("Learning Roadmap", 14, y);

  let currentY = y + 8;

  (resume.roadmap || []).forEach((item) => {
    doc.setFontSize(12);
    doc.text(`Skill : ${item.skill}`, 14, currentY);
    currentY += 6;

    doc.setFontSize(10);
    doc.text(`Beginner : ${JSON.stringify(item.beginner)}`, 18, currentY);
    currentY += 6;

    doc.text(`Intermediate : ${JSON.stringify(item.intermediate)}`, 18, currentY);
    currentY += 6;

    doc.text(`Advanced : ${JSON.stringify(item.advanced)}`, 18, currentY);
    currentY += 10;
  });

  doc.save(`${resume.resume_name}-Report.pdf`);
};