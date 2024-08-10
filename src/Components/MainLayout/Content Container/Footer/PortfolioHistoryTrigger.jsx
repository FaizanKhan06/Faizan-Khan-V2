import React, { useState } from "react";
import PortfolioHistoryDialog from "./PortfolioHistoryDialog";

export default function PortfolioHistoryTrigger({data}) {
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  const toggleDialog = () => {
    setIsDialogVisible(!isDialogVisible);
  };
  return (
    <div>
      <button
        className="hover:-text-teal-300 absolute bottom-0 right-0 inline-flex items-center px-2 py-4 font-medium text-slate-400 hover:-translate-y-2 focus-visible:text-teal-300"
        type="button"
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-controls="radix-:R4l6:"
        data-state="closed"
        onClick={toggleDialog}
      >
        <span className="sr-only">Click to time travel</span>
        <img
          alt="Spinning Tardis from Doctor Who"
          loading="lazy"
          width="100"
          height="60"
          decoding="async"
          data-nimg="1"
          style={{color:"transparent"}}
          src="https://faizankhan06.github.io/MyFiles/Portfolio_V2/Gif.gif"
        />
      </button>
      {isDialogVisible && (
        <PortfolioHistoryDialog toggleDialog={toggleDialog} data={data} />
      )}
    </div>
  );
}
