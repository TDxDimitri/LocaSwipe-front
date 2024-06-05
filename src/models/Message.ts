export interface Message {
  id: number;
  conversation_id: number;
  sender_id: number;
  sender_firstname: string;
  sender_lastname: string;
  content: string;
  created_at: string;
}
