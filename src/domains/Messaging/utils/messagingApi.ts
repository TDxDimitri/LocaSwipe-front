import axios from 'axios';
import { GET_CONVERSATIONS_URL, GET_MESSAGES_URL, POST_MESSAGE_URL, POST_CONVERSATION_URL } from '../../../config/ApiUrls';
import { Conversation } from '../../../models/Conversation';
import { Message } from '../../../models/Message';

export const getConversations = async (userId: number): Promise<Conversation[]> => {
  try {
    const response = await axios.get(GET_CONVERSATIONS_URL(userId));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getMessages = async (conversationId: number): Promise<Message[]> => {
  try {
    const response = await axios.get(GET_MESSAGES_URL(conversationId));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postMessage = async (message: { conversation_id: number; sender_id: number; content: string }): Promise<Message> => {
  try {
    const response = await axios.post(POST_MESSAGE_URL, message);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postConversation = async (conversation: { user1_id: number; user2_id: number }): Promise<Conversation> => {
  try {
    const response = await axios.post(POST_CONVERSATION_URL, conversation);
    return response.data;
  } catch (error) {
    throw error;
  }
};
