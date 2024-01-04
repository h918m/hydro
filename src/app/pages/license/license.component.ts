import { Component } from '@angular/core';
import { DashNavbarComponent } from '../../components/dashboard/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { DashSidebarComponent } from '../../components/dashboard/sidebar/sidebar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RenewOverviewComponent } from '../../components/dashboard/renew-overview/renew-overview.component';

@Component({
  selector: 'app-renew-license',
  templateUrl: './license.component.html',
  standalone: true,
  imports: [
    CommonModule,
    DashNavbarComponent,
    MatStepperModule,
    DashSidebarComponent,
    MatFormFieldModule,
    MatProgressBarModule,
    MatInputModule,
    MatIconModule,
    MatRadioModule,
    RenewOverviewComponent,
  ],
})
export class LicenseComponent {
  analysises = [
    {
      title: 'WELL WATER ANALYSIS',
      src: '../../assets/images/first-well-water.png',
      total: 3,
    },
    {
      title: 'Soil ANALYSIS',
      src: '../../assets/icons/soil.svg',
      total: 3,
    },
    {
      title: 'WELL WATER ANALYSIS',
      src: '../../assets/images/well-water.png',
      total: 3,
    },
    {
      title: 'WELL WATER ANALYSIS',
      src: '../../assets/images/first-well-water.png',
      total: 3,
    },
    {
      title: 'Soil ANALYSIS',
      src: '../../assets/icons/soil.svg',
      total: 3,
    },
    {
      title: 'WELL WATER ANALYSIS',
      src: '../../assets/icons/microscope.svg',
      total: 3,
    },
    {
      title: 'WELL WATER ANALYSIS',
      src: '../../assets/icons/microscope.svg',
      total: 3,
    },
  ];
  licenseData = {
    image: '../../../assets/images/licenseImage.png',
    title: 'License 2',
    activities: 134,
    tags: ['Tag3', 'Tag4'],
    rating: 3.8,
    reviews: 80,
    lever: 2,
    body: 'Description of License 2.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  };
}
