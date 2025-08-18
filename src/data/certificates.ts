export type Certificate = {
  title: string;
  issuer: string;
  date?: string; // e.g. 2024-06
  href?: string; // credential link
};

export const certificates: Certificate[] = [
  // Add your certificates here. Examples:
  // { title: "eJPT", issuer: "INE", date: "2023-06", href: "" },
  { title: "DevSecOps Certificate", issuer: "TryHackMe", date: "2025-08", href: "https://tryhackme.com/certificate/THM-ZO7SIIOPPD" },
  { title: "Jr Penetration Tester", issuer: "TryHackMe", date: "2025-08", href: "https://tryhackme.com/certificate/THM-IY36HJQCSJ" },
  { title: "Cyber Security 101 Certificate", issuer: "TryHackMe", date: "2025-07", href: "https://tryhackme.com/certificate/THM-WVLWPABIQ7" },
  // { title: "AWS Certified Cloud Practitioner", issuer: "AWS", date: "2022-11", href: "" },
]; 