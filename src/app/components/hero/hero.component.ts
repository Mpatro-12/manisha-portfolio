import { Component, OnInit, OnDestroy } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-hero",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.scss"],
})
export class HeroComponent implements OnInit, OnDestroy {
  typed = "";
  private roles = [
    "Software Developer",
    "Angular Expert",
    "Frontend Developer",
    "UI/UX Architect",
    "TypeScript Specialist",
    "React Developer",
  ];
  private idx = 0;
  private charIdx = 0;
  private deleting = false;
  private timer: any;

  stats = [
    { num: "4+", label: "Years Experience" },
    { num: "70%", label: "Load Time Reduced" },
    { num: "80%", label: "Fewer Defects" },
    { num: "7", label: "Devs Mentored" },
  ];

  badges = [
    { icon: "fab fa-angular", label: "Angular v10+" },
    { icon: "fab fa-react", label: "React.js" },
    { icon: "fas fa-code", label: "TypeScript" },
    { icon: "fas fa-server", label: "Node.js" },
    { icon: "fab fa-aws", label: "AWS" },
    { icon: "fas fa-lock", label: "JWT / OAuth2" },
    { icon: "fas fa-robot", label: "AI-Assisted Dev" },
  ];

  ngOnInit() {
    this.type();
  }
  ngOnDestroy() {
    clearTimeout(this.timer);
  }

  private type() {
    const current = this.roles[this.idx];
    const speed = this.deleting ? 55 : 105;
    if (!this.deleting) {
      this.typed = current.slice(0, ++this.charIdx);
      if (this.charIdx >= current.length) {
        this.deleting = true;
        this.timer = setTimeout(() => this.type(), 1800);
        return;
      }
    } else {
      this.typed = current.slice(0, --this.charIdx);
      if (this.charIdx <= 0) {
        this.deleting = false;
        this.idx = (this.idx + 1) % this.roles.length;
      }
    }
    this.timer = setTimeout(() => this.type(), speed);
  }

  scroll(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }
}
