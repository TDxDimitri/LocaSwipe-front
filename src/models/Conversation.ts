export interface Conversation {
  id: number;
  user1_id: number;
  user2_id: number;
  user1_name: string;
  user2_name: string;
  last_message: string;
}

export interface Message {
  id: number;
  conversation_id: number;
  sender_id: number;
  content: string;
  created_at: string;
}
