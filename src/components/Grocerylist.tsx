import React from "react";
import { IList } from "../Interfaces";

interface Props {
  glist: IList;
  removelistItem(removeItem: string): void;
  isChecked? : boolean;
}

const Grocerylist: React.FC<Props> = ({ glist, removelistItem,  }) => {

  return (
    <div className="w-[500px] h-12 flex text-white m-3.5">
      <div className="flex basis-4/5 items-center justify-center h-full">
        <span className={ "grid items-center w-full h-full text-base bg-slate-500 border border-solid border-white border-r-0 capitalize pl-3" }>
          {glist.product}
        </span>
        <span className={"grid items-center w-full h-full text-base bg-slate-500 border border-solid border-white border-r-0  justify-center" } >
          {glist.amount}
        </span>
      </div>

      <button
        className="basis-1/5 h-full border-l-[none] rounded-r-lg text-white cursor-pointer bg-red-400"
        onClick={() => removelistItem(glist.product)}
      >
        X
      </button>
    </div>
  );
};

export default Grocerylist;
