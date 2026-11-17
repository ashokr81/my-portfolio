export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  period: string;
  grade: string;
  gradeLabel: string;
  highlights: string[];
}

export interface CertificationItem {
  name: string;
  issuer: string;
  credentialType: string;
  verificationBadge: string;
  focus: string;
}

export const educationData: EducationItem = {
  degree: "B.Tech",
  field: "Electronics & Communication Engineering",
  institution: "RGUKT-IIIT, Srikakulam",
  period: "2019 – 2023",
  grade: "9.0 / 10",
  gradeLabel: "CGPA",
  highlights: [
    "Rigorous grounding in computer systems, signal processing, digital electronics, and network protocols.",
    "Academic excellence securing a 9.0 / 10 CGPA across four years.",
    "Led technical software projects and algorithmic design initiatives throughout university.",
  ],
};

export const certificationsData: CertificationItem[] = [
  {
    name: "MERN Stack Development",
    issuer: "CCBP",
    credentialType: "Professional Certification",
    verificationBadge: "Web Full-Stack",
    focus: "Modern web architecture, React.js component lifecycle, Node.js/Express APIs, and database modeling.",
  },
  {
    name: "Node.js & Microservices Architecture",
    issuer: "Udemy",
    credentialType: "Professional Certification",
    verificationBadge: "Backend & Services",
    focus: "Service decomposition, REST API design, messaging and resilient Node.js microservices.",
  },
  {
    name: "Full Stack Web Development & Cloud",
    issuer: "AWS",
    credentialType: "Professional Certification",
    verificationBadge: "Cloud",
    focus: "Deploying full-stack applications on AWS with EC2, S3 and RDS.",
  },
];
