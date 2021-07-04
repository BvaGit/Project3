import { createSelector } from "reselect";

export const getRoomsState = (state) => state.rooms;

export const getSocket = createSelector(getRoomsState, (rooms) => rooms.socket);

export const getMessages = createSelector(
  getRoomsState,
  (room) => room.messages
);

export const getNewMessage = createSelector(
  getRoomsState,
  (rooms) => rooms.new_message
);

export const getRooms = createSelector(getRoomsState, (state) => state.rooms);

export const getRoomsArray = createSelector(getRoomsState, (state) =>{
  // return Object.values(state.rooms)
  const arrRooms = Object.values(state.rooms)
  return arrRooms.filter(arrRoom => arrRoom.name.includes(state.searchRoom))
}
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


