import {
  Component,
  AfterViewInit,
  QueryList,
  ViewChildren,
  ElementRef,
} from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-skills",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"],
})
export class SkillsComponent implements AfterViewInit {
  @ViewChildren("bar") bars!: QueryList<ElementRef>;

  skillGroups = [
    {
      title: "Frontend Technologies",
      icon: "fas fa-laptop-code",
      color: "teal",
      skills: [
        { name: "Angular (v10+)", pct: 95 },
        { name: "TypeScript / ES6+", pct: 92 },
        { name: "React.js", pct: 82 },
        { name: "HTML5 / CSS3 / SCSS", pct: 95 },
        { name: "Angular Material", pct: 90 },
        { name: "RxJS / Observables", pct: 88 },
        { name: "NgRx / Redux", pct: 84 },
      ],
    },
    {
      title: "Backend & APIs",
      icon: "fas fa-server",
      color: "blue",
      skills: [
        { name: "RESTful APIs", pct: 92 },
        { name: "HTTP Interceptors", pct: 90 },
        { name: "JWT Auth / OAuth2", pct: 88 },
        { name: "Node.js", pct: 72 },
        { name: "MySQL / MongoDB", pct: 70 },
        { name: "JSON Data Mapping", pct: 90 },
      ],
    },
    {
      title: "Architecture & Patterns",
      icon: "fas fa-sitemap",
      color: "amber",
      skills: [
        { name: "Component-Based Arch", pct: 95 },
        { name: "Modular Architecture", pct: 90 },
        { name: "Micro Frontend", pct: 78 },
        { name: "Lazy Loading", pct: 92 },
        { name: "Reactive Forms", pct: 94 },
        { name: "Change Detection", pct: 88 },
      ],
    },
    {
      title: "DevOps, Testing & Cloud",
      icon: "fas fa-cloud",
      color: "pink",
      skills: [
        { name: "Jasmine / Karma", pct: 85 },
        { name: "Git / CI/CD Pipelines", pct: 85 },
        { name: "AWS (S3, EC2, Lambda)", pct: 70 },
        { name: "Docker", pct: 65 },
        { name: "Angular CLI / Webpack", pct: 88 },
        { name: "Oracle WebLogic", pct: 72 },
      ],
    },
  ];

  softSkills = [
    { icon: "fas fa-users", label: "Cross-Functional Team Collaboration" },
    {
      icon: "fas fa-chalkboard-teacher",
      label: "Mentoring & Guiding Developers",
    },
    { icon: "fas fa-tasks", label: "Agile / Scrum / Sprint Planning" },
    { icon: "fas fa-file-alt", label: "Technical Documentation" },
    { icon: "fas fa-clipboard-list", label: "Requirement Analysis" },
    { icon: "fas fa-lightbulb", label: "Technical Decision Making" },
    { icon: "fas fa-search", label: "Peer Code Reviews" },
    { icon: "fas fa-balance-scale", label: "Risk Assessment" },
    {
      icon: "fas fa-robot",
      label: "AI Tools — GitHub Copilot, ChatGPT, Cursor",
    },
  ];

  ngAfterViewInit() {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            el.style.width = el.dataset["w"] + "%";
            io.unobserve(el);
          }
        }),
      { threshold: 0.3 },
    );
    setTimeout(
      () => this.bars.forEach((b) => io.observe(b.nativeElement)),
      300,
    );
  }
}
