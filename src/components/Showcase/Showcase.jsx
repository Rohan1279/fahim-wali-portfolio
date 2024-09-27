import { useState } from "react";
import ShowcaseCard from "./ShowcaseCard";
const Showcase = () => {
  return (
    <div className="flex justify-between gap-x-[19px] mx-[154px] mt-[264px] w-[1132px] h-[671px] group showcase-gallery overflow-hidden">
      <ShowcaseCard
        htmlFor={"showcase-1"}
        id={"showcase-1"}
        className={``}
      ></ShowcaseCard>
      <ShowcaseCard
        htmlFor={"showcase-2"}
        id={"showcase-2"}
        className={`translate-y-[116px]  transition-all ease-in-out duration-300`}
      >
        {" "}
      </ShowcaseCard>
      <ShowcaseCard htmlFor={"showcase-3"} id={"showcase-3"} className={``}>
        {" "}
      </ShowcaseCard>
      <ShowcaseCard
        htmlFor={"showcase-4"}
        id={"showcase-4"}
        className={`translate-y-[38px] transition-all ease-in-out duration-300`}
      >
        {" "}
      </ShowcaseCard>
    </div>
  );
};

export default Showcase;
