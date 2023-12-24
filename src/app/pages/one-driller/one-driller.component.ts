import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { OneDrillerBriefComponent } from '../../components/oneDriller/one-driller-brief/one-driller-brief.component';
import { OneDrillerTrackRecordsComponent } from '../../components/oneDriller/one-driller-track-records/one-driller-track-records.component';
import { OneDrillerAboutComponent } from '../../components/oneDriller/one-driller-about/one-driller-about.component';
import { OneDrillerContactComponent } from '../../components/oneDriller/one-driller-contact/one-driller-contact.component';
import { OneDrillerEquipmentsComponent } from '../../components/oneDriller/one-driller-equipments/one-driller-equipments.component';

@Component({
  selector: 'app-one-driller',
  standalone: true,
  imports: [
    MatTabsModule,
    CommonModule,
    OneDrillerBriefComponent,
    OneDrillerTrackRecordsComponent,
    OneDrillerAboutComponent,
    OneDrillerContactComponent,
    OneDrillerEquipmentsComponent
  ],
  templateUrl: "one-driller.component.html",
})
export class OneDrillerComponent {
  activeTab = 1;
  changeActive(tab: number) {
    this.activeTab = tab;
  }
}
