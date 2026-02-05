import { Observable } from 'rxjs'; // <--- FIXED: Added 'rxjs'
import { Feedback } from '../models/feedback.models';
import { Injectable } from ;
import { HttpClient } from ;

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  // Update this URL if your Spring Boot runs on a different port
  private apiUrl = 'http://localhost:8080/api/feedback';

  constructor(private http: HttpClient) { }

  getAllFeedback(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(this.apiUrl);
  }

  submitFeedback(feedback: Feedback): Observable<Feedback> {
    return this.http.post<Feedback>(this.apiUrl, feedback);
  }
}