import { ActionCreator } from ".";
import item from "../models";

export const SHOWS_LOADED = "SHOWS LOADED";

export const ShowsLoadedAction: ActionCreator<item[]> = (shows: item[]) => ({
  type: SHOWS_LOADED,
  payload: shows,
});
export const QUERY_ACTION = "QUERY ACTION";

export const QueryLoadedAction: ActionCreator<string> = (query: string) => ({
  type: QUERY_ACTION,
  payload: query,
});
