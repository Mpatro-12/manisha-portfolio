import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="footer-glow"></div>
      <div class="container">
        <!-- ROW 1: Brand + Nav -->
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="footer-logo">
              <span class="lb">&lt;</span>AM<span class="lb">/&gt;</span>
            </div>
            <p>
              Software Developer specializing in Angular, React and enterprise
              web applications. Building secure, scalable and performant
              solutions with 4+ years of hands-on experience.
            </p>
            <div class="footer-socials">
              <a
                href="https://mail.google.com/mail/?view=cm&to=patroamanisha9@gmail.com&su=Hiring%20Inquiry"
                target="_blank"
                rel="noopener"
                class="fsoc"
                title="Email"
              >
                <i class="fas fa-envelope"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/a-manisha-patro-9a8024215/"
                target="_blank"
                class="fsoc"
                title="LinkedIn"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://github.com/Mpatro-12"
                target="_blank"
                class="fsoc"
                title="GitHub"
              >
                <i class="fab fa-github"></i>
              </a>
              <a
                href="assets/files/manisha_patro_cv.pdf"
                download="Manisha_Patro_CV.pdf"
                class="fsoc"
                title="Download CV"
              >
                <i class="fas fa-download"></i>
              </a>
            </div>
          </div>

          <div class="footer-col">
            <h4>Navigation</h4>
            <ul>
              <li *ngFor="let l of navLinks">
                <a (click)="go(l.id)">
                  <i class="fas fa-chevron-right"></i> {{ l.label }}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- ROW 2: Bottom bar -->
        <!-- <div class="footer-bottom">
          <p>&copy; 2025 A. Manisha Patro. All rights reserved.</p>
          <p>
            Built with
            <i class="fab fa-angular" style="color:#dd0031"></i> Angular 17
          </p>
        </div> -->
      </div>
    </footer>
  `,
  styles: [
    `
      .footer {
        background: var(--bg2);
        border-top: 1px solid var(--border);
        padding: 4rem 0 0;
        position: relative;
        overflow: hidden;
      }

      .footer-glow {
        position: absolute;
        top: -100px;
        left: 50%;
        transform: translateX(-50%);
        width: 600px;
        height: 200px;
        background: radial-gradient(
          ellipse,
          rgba(0, 229, 195, 0.05) 0%,
          transparent 70%
        );
        pointer-events: none;
      }

      /* ROW 1 */
      .footer-grid {
        display: grid;
        grid-template-columns: 1.6fr 1fr;
        gap: 3rem;
        padding-bottom: 3rem;
        border-bottom: 1px solid var(--border);
      }

      .footer-logo {
        font-family: var(--font-mono);
        font-size: 1.4rem;
        font-weight: 600;
        color: white;
        margin-bottom: 0.9rem;
        .lb {
          color: var(--teal);
        }
      }

      .footer-brand p {
        font-size: 0.86rem;
        color: var(--text2);
        line-height: 1.75;
        max-width: 320px;
        margin-bottom: 1.4rem;
      }

      .footer-socials {
        display: flex;
        gap: 0.6rem;

        .fsoc {
          width: 36px;
          height: 36px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text2);
          text-decoration: none;
          font-size: 0.85rem;
          transition: all 0.25s;

          &:hover {
            border-color: var(--teal);
            color: var(--teal);
            background: rgba(0, 229, 195, 0.08);
            transform: translateY(-3px);
          }
        }
      }

      .footer-col h4 {
        font-family: var(--font-display);
        font-size: 0.9rem;
        font-weight: 600;
        color: var(--white);
        margin-bottom: 1.1rem;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid var(--border);
      }

      .footer-col ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 0.6rem;

        a {
          font-size: 0.84rem;
          color: var(--text2);
          text-decoration: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          transition: all 0.2s;

          i {
            font-size: 0.6rem;
            color: var(--teal);
            opacity: 0;
            transition: opacity 0.2s;
          }

          &:hover {
            color: var(--teal);
            padding-left: 4px;
            i {
              opacity: 1;
            }
          }
        }
      }

      /* ROW 2 */
      .footer-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.25rem 0;

        p {
          font-size: 0.82rem;
          color: var(--text3);
        }
      }

      /* Responsive */
      @media (max-width: 768px) {
        .footer-grid {
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        .footer-bottom {
          flex-direction: column;
          gap: 0.5rem;
          text-align: center;
        }
      }
    `,
  ],
})
export class FooterComponent {
  navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  go(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }
}
