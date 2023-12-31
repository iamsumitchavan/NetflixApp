import SearchBar from "./SearchBar";

import ShowCardPage from "./ShowCardPage";
import item from "../models";
import { FC } from "react";
import { QueryLoadedAction } from "../action/Shows";
import { State } from "../reducers/Store";
import { QuerySelector, ShowLoadeSelector } from "../selector/Shows";
import { ConnectedProps, connect } from "react-redux";

type ShowCardProps = {} & ReduxProps;

const ShowCard: FC<ShowCardProps> = ({ show, query, queryLoaded }) => {
  return (
    <div>
      <SearchBar
        value={query}
        onChange={(event) => {
          queryLoaded(event.target.value);
        }}
      />
      <div className="flex flex-wrap justify-center gap-2">
        {show && show.map((s: item) => <ShowCardPage key={s.id} {...s} />)}
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  queryLoaded: QueryLoadedAction,
};

const mapstateToProps = (state: State) => {
  return { show: ShowLoadeSelector(state), query: QuerySelector(state) };
};
const connector = connect(mapstateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;
export default connector(ShowCard);
