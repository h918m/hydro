import { Component } from '@angular/core';
import { DashNavbarComponent } from '../../components/dashboard/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { DashSidebarComponent } from '../../components/dashboard/sidebar/sidebar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
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
}
