import { IConversation } from "../model/conversation";

 export const  mockConversations : IConversation[] = [
    {
      id: 1,
      recipientId: '1',
      agentId: 1,
      messages: [
        { senderId: 1, message: 'Hello, John!', timestamp : new Date("2023/10/01") },
        { senderId: 3, message: 'Hi, John!', timestamp : new Date()  }
      ]
    },
    {
      id: 2,
      recipientId: '2',
      agentId: 1,
      messages: [
        { senderId: 1, message: 'Hey, Jane!' },
        { senderId: 3, message: 'Hello, John!' }
      ]
    },
    {
      id: 3,
      recipientId: '3',
      agentId: 1,
      messages: [
        { senderId: 1, message: 'Hey, Alice!' },
        { senderId: 3, message: 'Hello, John!' }
      ]
    },
    {
      id: 4,
      recipientId: '4',
      agentId: 1,
      messages: [
        { senderId: 1, message: 'Hey, Bob!' },
        { senderId: 3, message: 'Hello, John!' }
      ]
    },
    {
      id: 5,
      recipientId: '5',
      agentId: 1,
      messages: [
        { senderId: 1, message: 'Hey, Eve!' },
        { senderId: 3, message: 'Hello, John!' }
      ]
    },
  ];