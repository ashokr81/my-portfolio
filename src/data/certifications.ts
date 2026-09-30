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
  grade: "9.3 / 10",
  gradeLabel: "CGPA",
  highlights: [
    "Rigorous grounding in computer systems, signal processing, digital electronics, and network protocols.",
    "Academic excellence securing a top tier 9.3 / 10 CGPA across four years.",
    "Led technical software projects and algorithmic design initiatives throughout university.",
  ],
};

export const certificationsData: CertificationItem[] = [
  {
    name: "Flutter with Node.js",
    issuer: "Udemy",
    credentialType: "Professional Certification",
    verificationBadge: "Full-Stack Mobile & API",
    focus: "Full-stack mobile integration connecting Flutter client apps to Node.js backend services and REST APIs.",
  },
  {
    name: "MERN Stack Development",
    issuer: "CCBP",
    credentialType: "Professional Certification",
    verificationBadge: "Web Full-Stack",
    focus: "Modern web architecture, React.js component lifecycle, Node.js/Express APIs, and database modeling.",
  },
  {
    name: "Firebase with Flutter",
    issuer: "Udemy",
    credentialType: "Professional Certification",
    verificationBadge: "Cloud & Realtime",
    focus: "Cloud Firestore, Firebase Authentication, Cloud Messaging (FCM), and offline-first mobile sync.",
  },
];
