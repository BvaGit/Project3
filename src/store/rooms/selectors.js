import { createSelector } from "reselect";

export const getRoomsState = (state) => state.rooms;

export const getSocket = createSelector(getRoomsState, (rooms) => rooms.socket);

// export const sendMessage = createSelector(
//   getRoomsState,
//   (messages) => messages.message
// );

export const getMessages = createSelector(
  getRoomsState,
  (room) => room.messages
);

export const getNewMessage = createSelector(
  getRoomsState,
  (rooms) => rooms.new_message
);

export const getRooms = createSelector(getRoomsState, (state) => state.rooms);

export const getRoomsArray = createSelector(getRoomsState, (state) =>
  Object.values(state.rooms)
);

export const getActiveRoom = createSelector(
  getRoomsState,
  (state) => state.activeRoom
);

export const getRoomById = createSelector(
  getRooms,
  (_state, props) => props.chatId,
  (rooms, chatId) => rooms[chatId]
);

export const getRoomMessages = createSelector(
  getRoomById,
  (room) => room.messages
);
