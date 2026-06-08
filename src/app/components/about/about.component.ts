import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-about",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent {
  highlights = [
    { icon: "fas fa-map-marker-alt", label: "Location", value: "India" },
    {
      icon: "fas fa-envelope",
      label: "Email",
      value: "patroamanisha9@gmail.com",
    },
    { icon: "fas fa-phone", label: "Phone", value: "+91 77499 57009" },
    {
      icon: "fas fa-graduation-cap",
      label: "Education",
      value: "MCA — College of Engineering & Technology",
    },
    { icon: "fas fa-briefcase", label: "Role", value: "Software Developer" },
    {
      icon: "fas fa-robot",
      label: "AI Tools",
      value: "GitHub Copilot · ChatGPT · AI-Assisted Development",
    },
    {
      icon: "fas fa-circle",
      label: "Status",
      value: "Open to Opportunities",
      green: true,
    },
  ];

  achievements = [
    {
      icon: "fas fa-tachometer-alt",
      color: "teal",
      value: "70%",
      label: "Load Time Reduction",
    },
    {
      icon: "fas fa-bug",
      color: "blue",
      value: "80%",
      label: "Fewer Production Defects",
    },
    {
      icon: "fas fa-users",
      color: "amber",
      value: "7",
      label: "Junior Devs Mentored",
    },
    {
      icon: "fas fa-bolt",
      color: "pink",
      value: "18%",
      label: "System Efficiency Boost",
    },
  ];
}
