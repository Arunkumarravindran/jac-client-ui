import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'jac-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent {
  @Input() selectedUser: string | null = null;
  @ViewChild('conversationContainer') private conversationContainer!: ElementRef;
  newMessage: string = '';
  messages: ChatMessage[] = [
    { senderId: 1, recipientId: 4, message: 'Hello, how can I assist you?' },
    { senderId: 4, recipientId: 1, message: 'I have a question about my account.' },
    { senderId: 1, recipientId: 4, message: 'Sure, what\'s your question?' },
    { senderId: 4, recipientId: 1, message: 'I need to update my contact information.' },
    { senderId: 1, recipientId: 4, message: 'Let me help you with that.' },
    // Add more messages as needed
  ];



  sendMessage() {
    if (this.newMessage.trim() !== '') {
      // Create a new message object and push it to the messages array
      const newChatMessage: ChatMessage = {
        senderId: 1, // Assuming the agent is sending the message
        recipientId: 4, // Assuming the user is the recipient
        message: this.newMessage
      };

      this.messages.push(newChatMessage);

      // Clear the input field
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
