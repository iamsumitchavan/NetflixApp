import SearchBar from "./SearchBar";

import ShowCardPage from "./ShowCardPage";
import item from "../models";
import { FC } from "react";
import { QueryLoadedAction } from "../action/Shows";
import { State } from "../reducers/Store";
import { QuerySelector, ShowLoadeSelector } from "../selector/Shows";
import { connect } from "react-redux";

type ShowCardProps = {
  ShowsLoaded: (s: item) => void;
  show: item[];
  query: string;
  queryLoaded: (query: string) => void;
};

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

export default connect(mapstateToProps, mapDispatchToProps)(ShowCard);
