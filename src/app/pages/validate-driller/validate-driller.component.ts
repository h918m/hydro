import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LandingNavbarComponent } from '../../components/landing-navbar/navbar.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LandingSidebarComponent } from '../../components/landing-sidebar/sidebar.component';
import { PrefferedSponsoredChoiceComponent } from '../../components/preffered-sponsored-choice/preffered-sponsored-choice.component';
import { FooterComponent } from '../../components/landing-footer/landing-footer.component';
import { ILocation } from '../../types/location';

@Component({
  selector: 'app-validate-driller',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    LandingNavbarComponent,
    LandingSidebarComponent,
    MatSelectModule,
    PrefferedSponsoredChoiceComponent,
    MatFormFieldModule,
    FooterComponent,
  ],
  templateUrl: './validate-driller.component.html',
})
export class ValidateDrillerComponent {
  drill_types = ['Residential', 'Commercial', 'Municipal', 'Sewage'];

  locations: ILocation[] = [];
  fetchLocations() {
    fetch(
      'http://161.97.137.187:1010/api/services/app/HydronetLocalGovernment/GetAll'
    )
      .then((res) => res.json())
      .then((data) => {
        this.locations = data.result.items;
      })
      .catch(console.log);
  }

  prefferedSponsoredChoice = [
    {
      image: '../../../assets/images/licenseImage.png',
      title: 'Hyrdo Engineering Service Limited ',
      subTitle: 'a31 Obafemi Awolowo way Off Allen Round About Ikeja, Lagos.',
      tags: ['Tag1', 'Tag2', 'Tag3'],
      otherTags: [
        {
          image: '../../../assets/images/otherTab1.png',
          title: 'WELL WATER ANALYSIS',
          number: 3,
        },
        {
          image: '../../../assets/images/otherTab2.png',
          title: 'Soil  ANALYSIS',
          number: 3,
        },
        {
          image: '../../../assets/images/otherTab3.png',
          title: 'WELL WATER ANALYSIS',
          number: 3,
        },
        {
          image: '../../../assets/images/otherTab4.png',
          title: 'WELL WATER ANALYSIS',
          number: 3,
        },
      ],
      body: "Curating and advising outstanding impact projects is our bread and butter- and it's also a lot of work 😅. Every listing on this site is copy written, edited, and curated by our internal team. We also produce and edit most project videos for our small",
    },
    {
      image: '../../../assets/images/licenseImage.png',
      title: 'Preferred Choice 2',
      subTitle: 'Subtitle for Choice 2',
      tags: ['Tag4', 'Tag5', 'Tag6'],
      otherTags: [
        {
          image: '../../../assets/images/otherTab1.png',
          title: 'Other Tag 1',
          number: 3,
        },
        {
          image: '../../../assets/images/otherTab2.png',
          title: 'Other Tag 2',
          number: 3,
        },
        {
          image: '../../../assets/images/otherTab3.png',
          title: 'Other Tag 2',
          number: 3,
        },
        {
          image: '../../../assets/images/otherTab4.png',
          title: 'Other Tag 2',
          number: 3,
        },
      ],
      body: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing eliLorem ipsum dolor sit amet, consectetur adipiscing eliLorem ipsum dolor sit amet, consectetur adipiscing eliLorem ipsum dolor sit amet, consectetur adipiscing eliLorem ipsum dolor sit amet, consectetur adipiscing eli.',
    },
    {
      image: '../../../assets/images/licenseImage.png',
      title: 'Preferred Choice 3',
      subTitle: 'Subtitle for Choice 3',
      tags: ['Tag7', 'Tag8', 'Tag9'],
      otherTags: [
        {
          image: '../../../assets/images/otherTab1.png',
          title: 'Other Tag 1',
          number: 3,
        },
        {
          image: '../../../assets/images/otherTab2.png',
          title: 'Other Tag 2',
          number: 3,
        },
        {
          image: '../../../assets/images/otherTab3.png',
          title: 'Other Tag 2',
          number: 3,
        },
        {
          image: '../../../assets/images/otherTab4.png',
          title: 'Other Tag 2',
          number: 3,
        },
      ],
      body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris Lorem ipsum dolor sit amet, consectetur adipiscing eliLorem ipsum dolor sit amet, consectetur adipiscing eliLorem ipsum dolor sit amet, consectetur adipiscing eliLorem ipsum dolor sit amet, consectetur adipiscing eliLorem ipsum dolor sit amet, consectetur adipiscing eli.',
    },
  ];

  constructor() {
    this.fetchLocations();
  }
}
