import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { IChatMessage } from '../model/conversation';
import { ConversationService } from '../service/conversation.service';
import { Observable, concatAll, map, of } from 'rxjs';

@Component({
  selector: 'jac-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit, OnChanges {
 
  @Input() selectedUser: string = '';
  @ViewChild('conversationContainer') private conversationContainer!: ElementRef;
  newMessage: string = '';
  messages: Observable<any[]> = of([]);

  constructor(private conversationService : ConversationService){}
  ngOnChanges(changes: SimpleChanges): void {
    
    this.messages = this.conversationService.getConversation(this.selectedUser).pipe(map(convorsation => convorsation.map(conv => conv.messages)),concatAll());
    this.messages.subscribe(data=> {
      console.log(data);

    })
  }

  ngOnInit(): void {
   
  }

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      const newChatMessage: IChatMessage = {
        senderId: 1, 
        message: this.newMessage,
        timestamp : new Date()
      };
      this.messages = this.messages.pipe(
        map(messages => {
          if (messages.length > 0) {
            const clonedUsers = [...messages];
            clonedUsers.push(newChatMessage);
            return clonedUsers;
          }
          return messages;
        })
      );
      this.newMessage = '';
      this.scrollToLastMessage();
    }
  }

  scrollToLastMessage() {
    try {
      this.conversationContainer.nativeElement.scrollTop = this.conversationContainer.nativeElement.scrollHeight;
    } catch (err) {}
  }
}

interface ChatMessage {
  senderId: number;
  recipientId: number;
  message: string;

}
