export interface IConversation {
    id: number; // Identifier for the conversation
    recipientId: string; // ID of the recipient (user or entity)
    agentId: number; // ID of the agent involved in the conversation
    messages: IChatMessage[]; // An array of chat messages within the conversation
  }
  
  export interface IChatMessage {
    senderId: number; // ID of the message sender (user, agent, or bot)
    message: string; // Content of the message
    timestamp? : Date
  }