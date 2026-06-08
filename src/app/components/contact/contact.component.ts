import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent {
  form = { name: "", email: "", subject: "", message: "" };
  sending = false;
  sent = false;

  cards = [
    {
      icon: "fas fa-envelope",
      label: "Email",
      value: "patroamanisha9@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&to=patroamanisha9@gmail.com&su=Hiring%20Inquiry",
      color: "teal",
    },
    {
      icon: "fas fa-phone",
      label: "Phone",
      value: "+91 77499 57009",
      href: "tel:+917749957009",
      color: "blue",
    },
    {
      icon: "fab fa-linkedin",
      label: "LinkedIn",
      value: "linkedin.com/in/manisha",
      href: "https://www.linkedin.com/in/a-manisha-patro-9a8024215/",
      color: "amber",
    },
  ];

  async submit() {
    if (!this.form.name || !this.form.email || !this.form.message) return;
    this.sending = true;

    try {
      const response = await fetch("https://formspree.io/f/xvznaabr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: this.form.name,
          email: this.form.email,
          subject: this.form.subject,
          message: this.form.message,
        }),
      });

      if (response.ok) {
        this.sent = true;
        this.form = { name: "", email: "", subject: "", message: "" };
        setTimeout(() => (this.sent = false), 6000);
      } else {
        alert(
          "Something went wrong. Please email me directly at patroamanisha9@gmail.com",
        );
      }
    } catch (e) {
      alert(
        "Network error. Please email me directly at patroamanisha9@gmail.com",
      );
    } finally {
      this.sending = false;
    }
  }
}
