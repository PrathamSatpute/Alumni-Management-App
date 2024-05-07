import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonNote, IonLabel, IonItem, IonListHeader, IonList, IonThumbnail } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonNote, IonLabel, IonItem, IonListHeader, IonList, IonThumbnail]
})

export class Tab2Page implements OnInit {
  events: { title: string, date: string, image: string }[] = [
    { title: 'Sardar Patel Institute of Technology is Nodal Center for IIRS-ISRO outreach programme for Online, Offline, Live & Interactive Courses from 23 June 2020.', date: '2024-05-10', image: 'assets/images/ISRO.png' },
    { title: 'Sardar Patel Institute of Technology takes immense pleasure in announcing Alumni Meet on 28 December 2018 at 4:30 PM. at SPIT Campus, Mumbai. All the alumni are cordially invited to attend the function and make it a grand success. Your presence will add glory to the grand day and offer you the opportunity to go back to your memorable time at SPIT as students with the flight of your memory. So, start the countdown and mark your calendars to have a gala time and an evening filled with Fun, Nostalgia & Networking.', date: '2024-05-15', image: 'assets/images/Alumni.jpg' },
    { title: "Get ready to unleash your inner fashion icon! Carnival is here, a competition where the fiercest design rivals clash in a dazzling display of creativity. This isn't just a show, it's a battleground for bold ideas and show-stopping style. Transform the runway with your most innovative looks and compete for ultimate fashion glory! Register right now or you'll be STRESSED later. This is your chance to SERVE some LOOKS that'll have everyone SHOOK. Let's get this fashion party STARTED!", date: '2024-05-20', image: 'assets/images/Carnival.png' }
  ];

  notice: { title: string, date: string, dueDate: string }[] = [
    { title: 'GRADE IMPROVEMENT EXAMINATION III AND IV RESULTS JULY 2023 AND AUGUST 2023', date: '2024-05-11', dueDate: '2024-05-25' },
    { title: 'Special Exam fail students list of FE SE TE and SYMCA for aug 2023', date: '2024-05-16', dueDate: '2024-05-30' },
    { title: 'Important Notice for University Students (Photocopy & Revaluation)', date: '2024-05-21', dueDate: '2024-06-05' }
  ];

  constructor() { }

  ngOnInit() {
  }
}
