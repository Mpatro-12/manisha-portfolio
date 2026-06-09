import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-experience",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./experience.component.html",
  styleUrls: ["./experience.component.scss"],
})
export class ExperienceComponent {
  jobs = [
    {
      title: "Software Developer",
      company: "Rumango Software & Consulting Services Pvt. Ltd.",
      period: "May 2025 – Present",
      type: "Full-time",
      current: true,
      bullets: [
        "Led end-to-end development of enterprise-grade full-stack applications using Angular (v10+), TypeScript, Node.js, and RESTful APIs — improved system efficiency by 18%",
        "Designed & implemented modular, component-based frontend architecture with REST API integrations — reduced development timelines by ~2 weeks per release",
        "Developed reusable UI components and shared modules using Angular, SCSS, Angular Material integrated with secure backend services",
        "Implemented JWT-based authentication and OAuth2 authorization for secure frontend–backend communication",
        "Integrated backend APIs using Angular HTTP Interceptors, RxJS & JSON data mapping — ensured reliable data flow and error handling",
        "Optimized performance via lazy loading & Angular change detection strategies — reduced load times by up to 70%",
        "Mentored 7 junior developers, conducted code reviews, enforced coding standards — reduced production defects by 80%, improved team productivity by 70%",
      ],
      tags: ['Angular','TypeScript','JavaScript','Node.js','RxJS','JWT','OAuth2','NgRx','SCSS'],
    },
    {
      title: "Associate Software Developer",
      company: "Rumango Software & Consulting Services Pvt. Ltd.",
      period: "August 2022 – April 2025",
      type: "Full-time",
      current: false,
      bullets: [
        "Developed & maintained secure banking and enterprise applications using Angular, React.js, Node.js & RESTful APIs, supporting role-based access and transaction workflows",
        "Built responsive, reusable UI components and reactive/template-driven forms using Angular, HTML5, SCSS & Angular Material for complex business processes",
        "Integrated frontend with backend via REST APIs, JWT auth, JSON mapping, HTTP interceptors & RxJS-based state management — optimized performance and API efficiency",
        "Collaborated cross-functionally in Agile/Scrum, managed code via Git & CI/CD pipelines, contributing to stable, on-time releases",
        "Built and maintained automated unit tests using Jasmine and Karma",
      ],
      tags: ['Angular','React.js','JavaScript','Redux','REST APIs','Agile','Git','CI/CD','Jasmine','Karma'],
    },
    {
      title: "Trainee Engineer",
      company: "Rumango Software & Consulting Services Pvt. Ltd.",
      period: "May 2022 – July 2022",
      type: "Full-time",
      current: false,
      bullets: [
        "Developed responsive UI components for banking & e-commerce applications using Angular, HTML5, CSS3, Bootstrap & JavaScript",
        "Integrated REST APIs, rendered JSON-based data, implemented basic reactive forms with validations",
        "Collaborated using Git, gained exposure to enterprise architecture, Agile processes & coding best practices",
      ],
      tags: ["Angular", "HTML5", "CSS3", "Bootstrap", "JavaScript", "Git"],
    },
  ];
}
