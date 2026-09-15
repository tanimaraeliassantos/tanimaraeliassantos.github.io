import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

interface ProjectDetail {
  id: string;
  titleKey: string;
  metaKey: string;
  summaryKey: string;
  image: string;
  stack: string[];
  github: string;
  sections: { titleKey: string; descKey: string }[];
}

@Component({
  selector: 'app-project-detail-component',
  standalone: true,
  imports: [TranslateModule, RouterLink, CommonModule],
  templateUrl: './project-detail-component.html',
  styleUrl: './project-detail-component.css',
})
export class ProjectDetailComponent implements OnInit {
  project: ProjectDetail | undefined;

  private projects: ProjectDetail[] = [
    {
      id: 'heritage-kitchen',
      titleKey: 'P1_TITLE',
      metaKey: 'P1_META',
      summaryKey: 'P1_SUMMARY',
      image: 'showcase-heritage_kitchen.png',
      stack: ['React', 'Supabase', 'Framer Motion', 'TypeScript'],
      github: 'https://github.com/tanimaraeliassantos/heritage-kitchen',
      sections: [
        { titleKey: 'P1_PROBLEM_TITLE', descKey: 'P1_PROBLEM_DESC' },
        { titleKey: 'P1_BUILT_TITLE', descKey: 'P1_BUILT_DESC' },
        { titleKey: 'P1_CONSTRAINT_TITLE', descKey: 'P1_CONSTRAINT_DESC' },
        { titleKey: 'P1_LEARNED_TITLE', descKey: 'P1_LEARNED_DESC' },
      ],
    },
    {
      id: 'smart-menu',
      titleKey: 'P2_TITLE',
      metaKey: 'P2_META',
      summaryKey: 'P2_SUMMARY',
      image: 'showcase-smart_menu.png',
      stack: ['Angular', 'TypeScript', 'REST APIs', 'LocalStorage'],
      github: 'https://github.com/tanimaraeliassantos/smart-menu-front',
      sections: [
        { titleKey: 'P2_DECISION_TITLE', descKey: 'P2_DECISION_DESC' },
        { titleKey: 'P2_BUILT_TITLE', descKey: 'P2_BUILT_DESC' },
        { titleKey: 'P2_REFLECTION_TITLE', descKey: 'P2_REFLECTION_DESC' },
        { titleKey: 'P2_LEARNED_TITLE', descKey: 'P2_LEARNED_DESC' },
      ],
    },
    {
      id: 'astroreserva',
      titleKey: 'P3_TITLE',
      metaKey: 'P3_META',
      summaryKey: 'P3_SUMMARY',
      image: 'showcase-astroreserva.png',
      stack: ['Angular', 'Spring Boot', 'JWT', 'Tailwind CSS'],
      github: 'https://github.com/tanimaraeliassantos/reto-daw-eventos',
      sections: [
        { titleKey: 'P3_ARCH_TITLE', descKey: 'P3_ARCH_DESC' },
        { titleKey: 'P3_SECURITY_TITLE', descKey: 'P3_SECURITY_DESC' },
        { titleKey: 'P3_BIZ_TITLE', descKey: 'P3_BIZ_DESC' },
        { titleKey: 'P3_DESIGN_TITLE', descKey: 'P3_DESIGN_DESC' },
      ],
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.project = this.projects.find((p) => p.id === id);
  }
}
