import { createSelector } from "reselect";

export const getRoomsState = (state) => state.rooms;

export const getSocket = createSelector(getRoomsState, (rooms) => rooms.socket);

export const sendMessage = createSelector(
  getRoomsState,
  (messages) => messages.message
);

export const getRooms = createSelector(getRoomsState, (state) => state.rooms);
export const getRoomsArray = createSelector(getRoomsState, (state) => Object.values(state.rooms));

export const getActiveRoom = createSelector(
  getRoomsState,
  (state) => state.activeRoom
);

export const getRoomById = createSelector(
    getRooms,
    (_state, props) => props.roomId,
    (rooms, roomId) => rooms[roomId],
);

export const getRoomMessages = createSelector(
    getRoomById,
    (room) => room.messages,
)
