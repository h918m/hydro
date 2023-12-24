import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-filter-tab',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatExpansionModule,
    FormsModule,
    MatCheckboxModule,
  ],
  templateUrl: 'filter-tab.component.html',
  styleUrl: './filter-tab.component.css',
})
export class FilterTabComponent {
  controls = [
    {
      title: 'Permit & License',
      checks: [
        'Driller Permit',
        'Borehole Drill Permit',
        'Microsoft',
        'MSI',
        'Lenovo',
      ],
    },
    {
      title: 'Processor',
      checks: ['Intel', 'AMD'],
    },
    {
      title: 'Harddisk Type',
      checks: ['SSD', 'HDD'],
    },
    {
      title: 'Harddisk Størrelse',
      checks: ['500 GB', '1 TB', '2 TB'],
    },
  ];
}
