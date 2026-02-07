import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FeedbackService } from '../../services/feedback';
import { Feedback } from '../../models/feedback.models';

@Component({
  selector: 'app-feedback-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './feedback-list.html',
  styleUrls: [] // Using global styles and Bootstrap
})
export class FeedbackListComponent implements OnInit {
  allFeedback: Feedback[] = [];
  filteredFeedback: Feedback[] = [];
  ratingFilter: string = 'All';
  isLoading: boolean = true;

  constructor(private feedbackService: FeedbackService) {}

  ngOnInit(): void {
    this.loadFeedback();
  }

  loadFeedback() {
    this.isLoading = true;
    this.feedbackService.getAllFeedback().subscribe({
      next: (data) => {
        this.allFeedback = data;
        this.applyFilter(); // Ensure current filter is applied to new data
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Failed to load feedback', err);
        this.isLoading = false;
      }
    });
  }

  applyFilter() {
    if (this.ratingFilter === 'All') {
      this.filteredFeedback = [...this.allFeedback];
    } else {
      const ratingNum = Number(this.ratingFilter);
      this.filteredFeedback = this.allFeedback.filter(f => f.rating === ratingNum);
    }
  }

  // Helper method for UI badges (Decent UI points)
  getRatingClass(rating: number): string {
    if (rating >= 4) return 'bg-success';
    if (rating === 3) return 'bg-warning text-dark';
    return 'bg-danger';
  }
}