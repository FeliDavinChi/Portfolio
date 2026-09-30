import {
  BriefcaseBusinessIcon,
  CodeXmlIcon,
  DraftingCompassIcon,
  GraduationCapIcon,
} from "lucide-react"

import type { Experience } from "@/features/portfolio/types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "ihub-data",
    companyName: "iHub-Data, IIIT Hyderabad",
    companyIcon: <GraduationCapIcon strokeWidth={1.8} />,
    companyWebsite: "https://ihub-data.iiit.ac.in",
    location: "Hyderabad, India",
    locationType: "On-site",
    positions: [
      {
        id: "1",
        title: "AI & ML Student Trainee",
        employmentPeriod: {
          start: "02.2026",
          end: "08.2026",
        },
        employmentType: "Training Program",
        icon: <CodeXmlIcon />,
        description: `- Completed the Student Training Program on AI & ML at iHub-Data, IIIT Hyderabad.
- Gained hands-on experience with Classification, Regression, Clustering, NLP, Deep Learning Architectures (CNNs, RNNs), and Transformer models.
- Worked with PyTorch, TensorFlow/Keras, HuggingFace Transformers, OpenCV, and Streamlit for model deployment.`,
        skills: [
          "Python",
          "PyTorch",
          "TensorFlow",
          "Keras",
          "HuggingFace",
          "OpenCV",
          "Streamlit",
          "NLP",
          "Deep Learning",
        ],
        isExpanded: true,
      },
    ],
  },
  {
    id: "freelance",
    companyName: "Freelance",
    companyIcon: <BriefcaseBusinessIcon strokeWidth={1.8} />,
    location: "Remote",
    locationType: "Remote",
    positions: [
      {
        id: "1",
        title: "Graphic Designer",
        employmentPeriod: {
          start: "03.2020",
          end: "02.2023",
        },
        employmentType: "Self-employed",
        icon: <DraftingCompassIcon />,
        description: `- Delivered 500+ design assets (branding, logos, digital media) for 350+ clients across 3 years.
- Managed full project lifecycle — brief to final delivery — with 100% completion rate.
- Built transferable skills in visual communication and iterative problem-solving, now applied to UI/UX.`,
        skills: [
          "Graphic Design",
          "Branding",
          "Logo Design",
          "Visual Communication",
          "UI/UX",
          "Adobe Photoshop",
          "Adobe Illustrator",
        ],
        isExpanded: true,
      },
    ],
  },
]
