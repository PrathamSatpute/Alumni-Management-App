import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonLabel, IonItem, IonList } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonLabel, IonItem, IonList],
})
export class Tab4Page implements OnInit {
  candidates: { username: string, password: string, approved: boolean, rejected: boolean }[] = [
    { username: 'user1', password: 'password1', approved: false, rejected: false },
    { username: 'user2', password: 'password2', approved: false, rejected: false },
    { username: 'user3', password: 'password3', approved: false, rejected: false }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  approveCandidate(candidate: any) {
    // Logic to approve candidate
    console.log('Approved:', candidate);
    candidate.approved = true;
    candidate.rejected = false; // Reset rejected status
  }

  rejectCandidate(candidate: any) {
    // Logic to reject candidate
    console.log('Rejected:', candidate);
    candidate.rejected = true;
    candidate.approved = false; // Reset approved status
  }
}