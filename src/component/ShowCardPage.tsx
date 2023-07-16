import { FC } from "react";
type ShowCardPageProps = {
  id: number;
  name: string;
  image?: {
    medium: string;
    original: string;
  };
  summary?: string;
};

const ShowCardPage: FC<ShowCardPageProps> = ({ id, name, image, summary }) => {
  return (
    <div className="p-5 shadow-xl">
      <img src={image?.medium} alt="" className="" />
      <h1>{name}</h1>
      <p>{id}</p>
      <div className=" flex flex-col justify-center w-80">
        <p className="">{summary}</p>
      </div>
    </div>
  );
};

export default ShowCardPage;
