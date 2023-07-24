import { createSelector } from "reselect";
import { State } from "../reducers/Store";

export const ShowsSelector = (state: State) => {
  return state.show;
};

export const ShowLoadeSelector = createSelector(ShowsSelector, (showState) =>
  Object.keys(showState.shows).map((sid) => showState.shows[+sid])
);
export const QuerySelector = createSelector(
  ShowsSelector,
  (showState) => showState.query
);

export const SingleshowSelector = createSelector(ShowsSelector, (showState) => {
  return showState.show;
});
