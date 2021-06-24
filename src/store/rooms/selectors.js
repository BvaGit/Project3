import { createSelector } from "reselect";

export const getRoomsState = (state) => state.rooms;

export const getSocket = createSelector(getRoomsState, (rooms) => rooms.socket);
