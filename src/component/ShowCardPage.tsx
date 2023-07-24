import { FC } from "react";
import { Link } from "react-router-dom";
type ShowCardPageProps = {
  id: number;
  name: string;
  image?: {
    medium: string;
    original: string;
  };
  summary?: string;
  rating?: {
    average?: number;
  };
};

const ShowCardPage: FC<ShowCardPageProps> = ({ name, image, rating, id }) => {
  return (
    <div className="p-5 shadow-xl">
      <img
        src={
          image?.medium ||
          "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
        }
        alt=""
        className="object-cover object-center w-full h-72 rounded-t-md"
      />
      <div className="flex flex-col justify-center items-center flex-wrap py-1">
        <h1 className="text-xl font-semibold">{name}</h1>
        <p className="text-green-700 font-semibold">
          {rating?.average ? rating.average : "No rating"}
        </p>
        <Link to={"/" + id}>
          <p className="text-lg font-semibold text-indigo-600">view detail</p>
        </Link>
      </div>
    </div>
  );
};

export default ShowCardPage;
