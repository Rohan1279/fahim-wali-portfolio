import ShowcaseCard from "./ShowcaseCard";

const UserInterface = () => {
  return (
    <ShowcaseCard
      htmlFor={"user-interface"}
      id={"user-interface"}
      className={`relative overflow-hidden group`}
    >
      <img
        src="/images/user-interface.png"
        alt="user-interface"
        className="opacity-0 peer-checked:opacity-100 transition-all absolute right-0 top-0 delay-500 w-full h-full object-cover z-40"
      />
      <div className="absolute right-7 group-has-[:checked]:right-[45px] group-has-[:checked]:translate-x-0 mt-[102px] transition-all delay-[600ms] z-50  text-[#2d2d2d] group-has-[:checked]:text-[#D9D9D920]">
        <h2 className="font-poppins  font-extralight text-[40px] leading-[3.5rem] ">
          Diegetic
        </h2>
        <h2 className="font-poppins  font-extrabold text-[96px] leading-[3.5rem]">
          User
        </h2>
        <h2 className="font-poppins  font-semibold text-[40px] leading-[3.5rem] ml-[3px]">
          Interface
        </h2>
        <h3 className="font-poppins font-medium text-xl text-[#161414] tracking-widest">
          product name
        </h3>
      </div>
    </ShowcaseCard>
  );
};

export default UserInterface;
