import { useState } from "react";
import ShowcaseCard from "./ShowcaseCard";

const Showcase = () => {
  return (
    <div className="flex justify-center gap-x-5 px-[154px] mt-[264px] group">
      <ShowcaseCard className={` transition-all ease-in-out duration-300`}>
        {" "}
      </ShowcaseCard>
      <ShowcaseCard
        className={` translate-y-[116px] transition-all ease-in-out duration-300`}
      >
        {" "}
      </ShowcaseCard>
      <ShowcaseCard className={` transition-all ease-in-out duration-300`}>
        {" "}
      </ShowcaseCard>
      <ShowcaseCard
        className={` translate-y-[38px] transition-all ease-in-out duration-300`}
      >
        {" "}
      </ShowcaseCard>
    </div>
  );
};

export default Showcase;
