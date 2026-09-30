import type { Education } from "@/features/portfolio/types/education"

export const EDUCATION: Education[] = [
  {
    id: "iit-madras",
    school: "Indian Institute of Technology, Madras (IIT Madras)",
    degree: "Bachelor of Science (B.S.)",
    fieldOfStudy: "Data Science and Applications",
    period: {
      start: "2025",
      end: "2029",
    },
    description: `- Pursuing a B.S. in Data Science & Applications from IIT Madras.
- Deepening expertise in Machine Learning, Statistical Modeling, Deep Learning, and Algorithmic Foundations.
- Rigorous coursework covering Data Analysis, Artificial Intelligence, Big Data Processing, and Statistical Inference.`,
    skills: [
      "Data Science",
      "Machine Learning",
      "Python",
      "Statistics",
      "Deep Learning",
      "SQL",
      "Data Structures & Algorithms",
    ],
    isExpanded: true,
  },
  {
    id: "ngit",
    school: "Neil Gogte Institute of Technology",
    degree: "Bachelor of Engineering (B.E.)",
    fieldOfStudy: "Computer Science & Engineering",
    period: {
      start: "2025",
      end: "2029",
    },
    description: `- Pursuing a B.E. in Computer Science & Engineering.
- Core curriculum focusing on Systems Programming, Operating Systems, Database Management, Web Engineering, and Software Architecture.
- Hands-on development of software applications, AI/ML projects, and modern full-stack web applications.`,
    skills: [
      "Computer Science",
      "C++",
      "Java",
      "Python",
      "Data Structures & Algorithms",
      "DBMS",
      "Web Development",
      "Software Engineering",
    ],
    isExpanded: true,
  },
]
