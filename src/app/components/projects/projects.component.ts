import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      name: 'ICust — Banking Application',
      category: 'Enterprise Banking',
      color: 'teal',
      icon: 'fas fa-university',
      summary: 'Secure, role-based banking web application supporting multiple user roles, transaction types & account management with real-time state management.',
      highlights: [
        'Built role-based access supporting multiple user types & transaction workflows',
        'Integrated JWT authentication & RESTful APIs for robust security',
        'Developed modular, reusable components with lazy loading for performance',
        'Implemented reactive forms validations for transaction processing',
        'Managed real-time state using RxJS and Angular services',
        'Optimized UI/UX with Angular Material & responsive design'
      ],
      tags: ['Angular', 'Angular JS', 'JWT Auth', 'RxJS', 'Angular Material', 'Lazy Loading', 'REST APIs']
    },
    {
      name: 'Median — Middleware Platform',
      category: 'Enterprise Middleware',
      color: 'blue',
      icon: 'fas fa-network-wired',
      summary: 'Enterprise middleware platform used by banks to convert and process XML, JSON, CSV, Excel & Flat File data across multiple systems with audit & monitoring.',
      highlights: [
        'Worked on data conversion across XML, JSON, CSV, Excel & Flat File formats',
        'Developed Angular screens for configuration & management of interfaces',
        'Integrated frontend with REST and SOAP services for secure data flow',
        'Implemented audit & monitoring features for transaction & interface tracking',
        'Fixed UAT and production issues under tight Agile deadlines'
      ],
      tags: ['Angular', 'Reactive Forms', 'REST', 'SOAP', 'Agile', 'Audit & Monitoring']
    },
    {
      name: 'ExpressBees — Logistics Platform',
      category: 'Logistics & Tracking',
      color: 'amber',
      icon: 'fas fa-shipping-fast',
      summary: 'Real-time logistics management dashboard with live package tracking, responsive UI, Redux state management and optimized async data fetching.',
      highlights: [
        'Built React.js dashboard with real-time package tracking',
        'Integrated REST APIs with Redux for efficient state management',
        'Optimized performance using lazy loading & async data fetching',
        'Used Material-UI for consistent, responsive component library',
        'Implemented reusable React components for enhanced UX'
      ],
      tags: ['React.js', 'Redux', 'Material-UI', 'REST APIs', 'Lazy Loading', 'Async JS']
    }
  ];
}
