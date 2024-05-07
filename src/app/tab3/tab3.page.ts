import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonNote, IonLabel, IonItem, IonList } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonNote, IonLabel, IonItem, IonList],
})
export class Tab3Page implements OnInit {
  achievements: { title: string, date: string, image: string }[] = [
    { title: 'Achievement 1', date: '2024-05-12', image: 'assets/images/achievement1.jpg' },
    { title: 'Achievement 2', date: '2024-05-17', image: 'assets/images/achievement2.png' },
    { title: 'Achievement 3', date: '2024-05-22', image: 'assets/images/achievement3.png' }
  ];

  constructor() { }

  ngOnInit() {
  }
}
