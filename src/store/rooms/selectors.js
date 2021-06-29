import { createSelector } from "reselect";

export const getRoomsState = (state) => state.rooms;

export const getSocket = createSelector(getRoomsState, (rooms) => rooms.socket);

export const sendMessage = createSelector(
  getRoomsState,
  (messages) => messages.message
);
