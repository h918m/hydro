import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'landing-sidebar',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './sidebar.component.html',
})
export class LandingSidebarComponent {
  sidebar = [
    { title: 'Validate Driller Permit', link: '/' },
    { title: 'Renew Permit', link: '/renew' },
    { title: 'Apply For Driller License', link: '/apply-driller' },
    { title: 'Apply for Borehole Permit', link: '/apply-borehore' },
    { title: 'Request Water Test/Analysis', link: '/request-water' },
  ];

  public href: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.href = this.router.url;
  }
}
