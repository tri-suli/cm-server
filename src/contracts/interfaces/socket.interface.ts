import { Message, Room, User } from "../types/global.type";

export interface IServerToClientEvent {
  /**
   * Get the web server description
   *
   * @return {void}
   */
  acknowledge: () => void;

  /**
   * Get the application version
   *
   * @return {void}
   */
  version: () => void;
}

export interface ClientToServerEvent {
  /**
   * Handle close chat session
   *
   * @param {User} user
   * @param {Room} room
   */
  disconnect: (user: User, room: Room) => void;

  /**
   * Handle users to join specified room by name
   *
   * @param {Room} room
   * @param {User} user
   */
  joinRoom: (room: Room, user: User) => void;

  /**
   * Sent the message back to user's receiver
   *
   * @param {Message} message
   */
  receiveMessage: (message: Message) => void;

  /**
   * Send a new message to the user's receiver
   *
   * @param message
   */
  sendMessage: (message: Message) => void;
}
