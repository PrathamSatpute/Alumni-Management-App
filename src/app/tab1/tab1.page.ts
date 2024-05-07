import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { IonHeader, IonToolbar, IonTitle, IonContent, IonText, IonButton, IonInput, IonItem } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonText, IonInput, IonButton, IonItem],
})
export class Tab1Page implements OnInit {
  username: string;
  password: string;
  errorMessage: string;
  authenticated: boolean = false; // Track authentication status
  showAuthenticatedMessage: boolean = false; // Track if the message should be shown

  constructor(private router: Router) {
    this.username = '';
    this.password = '';
    this.errorMessage = '';
  }

  ngOnInit() {}

  authenticate() {
    // Reset message status
    this.showAuthenticatedMessage = false;
    
    // Simulate authentication
    if (this.username === 'user' && this.password === 'password') {
      // Authentication successful
      this.authenticated = true;
      // Show authenticated message
      this.showAuthenticatedMessage = true;
      // Redirect to home page
      this.router.navigate(['/home']);
    } else {
      // Authentication failed, display error message
      this.errorMessage = 'Invalid username or password';
    }
  }
}