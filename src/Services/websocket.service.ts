import { Server, Socket } from 'socket.io';

import {ClientToServerEvent, IServerToClientEvent} from "../contracts/interfaces/socket.interface";
import {Message, Room, User} from "../contracts/types/global.type";

class WebsocketService {
  private io: Server;

  constructor() {
    this.io = new Server<
        IServerToClientEvent,
        ClientToServerEvent
    >({
      cors: {
        origin: "https://localhost:3000",
        methods: ["GET", "POST"]
      }
    })
  }

  /**
   * Handle event to close the session in specified room
   *
   * @param {User} user
   * @param {Room} room
   */
  disconnect(user: User, room: Room): void {
    // @TODO: Close the session of current active room's
  }

  /**
   * Handle event to allow users to join a room
   *
   * @param {Room} room
   * @param {User} user
   */
  joinRoom(room: Room, user: User): void {
    // @TODO: Validate unique user name
    // @TODO: Validate if the targeted room is exists
    // @TODO: Validate user & room data should be required
    // @TODO: Store the user & room data to MongoDB
    // @TODO: Return chat messages in descending order that belongs to targeted room
  }

  /**
   * Handle event to send the message back to user's receiver
   * in specified rooms
   *
   * @param {Message} message
   */
  receiveMessage(message: Message): void {
    // @TODO: Sent the new message from sender to specified room
  }

  /**
   * Handle event to send the message to specified room's
   *
   * @param {Message} message
   */
  sendMessage(message: Message): void {
    // @TODO: Sent the message to user's receiver in specified room
  }
}

export default WebsocketService;
