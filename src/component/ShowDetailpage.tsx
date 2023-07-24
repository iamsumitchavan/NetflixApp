import { useParams } from "react-router-dom";
import { ShowsDetailActionLoaded } from "../action/Shows";
import { ConnectedProps, connect } from "react-redux";
import { FC, useEffect } from "react";
import { getShowDetailList } from "../Api";
import { MdKeyboardBackspace } from "react-icons/md";
import { SingleshowSelector } from "../selector/Shows";
import { State } from "../reducers/Store";
import { Link } from "react-router-dom";

type ShowDetailPageProps = {} & ReduxProps;

const ShowDetailPage: FC<ShowDetailPageProps> = ({ show, singleShow }) => {
  let params = useParams();
  const showid = (params.showid && +params.showid) || 0;

  useEffect(() => {
    getShowDetailList(showid).then((response) => show(response));
  }, [showid]);

  return (
    <>
      <div className="flex justify-center py-3">
        <div className="flex justify-between shadow-md w-3/4 py-1 items-center px-4">
          <p>
            <Link to="/">
              <MdKeyboardBackspace className="text-xl font-bold" />
            </Link>
          </p>
          <p className="text-xl font-bold">go Back</p>
        </div>
      </div>
      <div className="flex  justify-center py-10 ">
        <div className=" flex flex-wrap  justify-start gap-10 shadow-md w-3/4">
          <div>
            <img
              className="h-72 rounded-t-sm"
              src={singleShow.image?.medium}
              alt=""
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold ">{singleShow.name}</h1>

            <div className="flex gap-2 flex-wrap py-1">
              {singleShow.genres &&
                singleShow.genres.map((s: string, index: number) => (
                  <div key={index}>
                    <button className="w-full px-1 bg-green-500 text-white rounded-sms rounded-sm">
                      {s}
                    </button>
                  </div>
                ))}
            </div>
            <p>
              <span className="text-lg font-bold">status: </span>
              {singleShow.status}
            </p>
            <p>
              <span className="text-lg font-bold">Ratings : </span>
              {singleShow.rating?.average}/10
            </p>
            <div>
              <p className="">{singleShow?.summary}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = {
  show: ShowsDetailActionLoaded,
};

const mapstateToProps = (state: State) => {
  return { singleShow: SingleshowSelector(state) };
};

const connector = connect(mapstateToProps, mapDispatchToProps);
type ReduxProps = ConnectedProps<typeof connector>;

export default connector(ShowDetailPage);
