import { schema } from "normalizr";
import { QUERY_ACTION, SHOWS_LOADED } from "../action/Shows";
import item from "../models";
import { AnyAction } from "@reduxjs/toolkit";
import produce from "immer";
import { normalize } from "normalizr";
export type state = {
  shows: { [showId: number]: item };
  query: string;
};

export const initialState: state = {
  shows: {},
  query: "",
};

const ShowReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SHOWS_LOADED: {
      return produce(state, (draft) => {
        const shows = action.payload as item[];
        const showEntity = new schema.Entity("shows");
        const normalizedShows = normalize(shows, [showEntity]);

        draft.shows = normalizedShows.entities.shows || {};
      });
    }

    case QUERY_ACTION: {
      return produce(state, (draft) => {
        draft.query = action.payload as string;
      });
    }

    default: {
      return state;
    }
  }
};

export default ShowReducer;
