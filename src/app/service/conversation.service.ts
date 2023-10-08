import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mockConversations } from '../mock/conversation-list';
import { IConversation } from '../model/conversation';

@Injectable({
  providedIn: 'root'
})
export class ConversationService {
  private apiUrl = 'your_api_url_here'; // Replace with your API endpoint URL

  constructor(private http: HttpClient) {}

  getConversation(recepientId : string): Observable<IConversation[]> {
    // Send an HTTP GET request to fetch the list of users
    //return this.http.get<any[]>(this.apiUrl);
    return of(mockConversations.filter(convo => convo.recipientId === recepientId));
  }
}
