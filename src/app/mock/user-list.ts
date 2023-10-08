// mock-users.ts

import { IUser } from "../model/users";

export const mockUsers  : IUser[] = [
    {
      id: 1,
      recipientId: '1',
      name: 'John Doe',
      email: 'john@example.com',
      profileImage: 'https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-512.png',
      lastMessage : "How are you?"
    },
    {
      id: 2,
      recipientId: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      profileImage: 'https://th.bing.com/th/id/OIP.9foYV1DrpdsVmevOY0eX5QHaHa?pid=ImgDet&w=500&h=500&rs=1',
      lastMessage : "How are you?"
    },
    {
      id: 3,
      recipientId: '3',
      name: 'Alice Johnson',
      email: 'alice@example.com',
      profileImage: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png',
      lastMessage : "How are you?"
    },
    {
      id: 4,
      recipientId: '4',
      name: 'Bob Brown',
      email: 'bob@example.com',
      profileImage: 'https://cdn1.iconfinder.com/data/icons/avatar-2-2/512/Casual_Man_3-512.png',
      lastMessage : "How are you?"
    },
    {
      id: 5,
      recipientId: '5',
      name: 'Eve Wilson',
      email: 'eve@example.com',
      profileImage: 'https://th.bing.com/th/id/OIP.I2Ewx_0R20V7y_kC008nlAHaHa?pid=ImgDet&w=512&h=512&rs=1   ',
      lastMessage : "How are you?"
    },
    // Add more mock users as needed
  ];
  