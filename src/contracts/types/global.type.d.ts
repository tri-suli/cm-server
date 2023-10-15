/**
 * Declare a type for ID
 *
 * @var {string}
 */
export type ID = string;

/**
 * Declare a user object type
 *
 * @var {object}
 */
export type User = {
  id: ID;
  fullName: string;
};

/**
 * Declare a room object type
 *
 * @var {object}
 */
export type Room = {
  id: ID;
  roomName: string;
};

/**
 * Declare a message object type
 *
 * @var {object}
 */
export type Message = {
  body: string;
  from: User;
  to: User;
  room: Room;
}