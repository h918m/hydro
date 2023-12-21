import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { OneDrillerBriefComponent } from '../../components/one-driller-brief/one-driller-brief.component';
import { OneDrillerTrackRecordsComponent } from '../../components/one-driller-track-records/one-driller-track-records.component';
import { OneDrillerAboutComponent } from '../../components/one-driller-about/one-driller-about.component';
import { OneDrillerContactComponent } from '../../components/one-driller-contact/one-driller-contact.component';

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
  ],
  templateUrl: "one-driller.component.html",
})
export class OneDrillerComponent {
  activeTab = 0;
  changeActive(tab: number) {
    this.activeTab = tab;
  }
}
