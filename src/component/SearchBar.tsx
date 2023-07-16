import { FC, InputHTMLAttributes } from "react";
type SearchBarProps = InputHTMLAttributes<HTMLInputElement>;

const SearchBar: FC<SearchBarProps> = (props) => {
  return (
    <div>
      <div>
        <input
          {...props}
          type="text"
          className="border border-black p-2 w-80 rounded-lg"
        />
      </div>
    </div>
  );
};

export default SearchBar;
