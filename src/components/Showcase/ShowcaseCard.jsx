/* eslint-disable react/prop-types */
const ShowcaseCard = ({
  className,
  children,
  htmlFor,
  id,
  isChecked,
  handleOnClick,
  ...rest
}) => {
  return (
    <label
      htmlFor={htmlFor}
      onClick={handleOnClick}
      className={`${className} min-w-[268px] h-[555px] rounded-[10px] bg-[#d9d9d9] select-none peer `}
      {...rest}
    >
      <input
        type="checkbox"
        id={id}
        className="peer invisible"
        checked={isChecked}
        onChange={() => {}} // Controlled component
      />

      {children}
    </label>
  );
};

export default ShowcaseCard;
