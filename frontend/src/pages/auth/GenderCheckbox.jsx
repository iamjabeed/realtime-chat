const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex items-center mt-2">
      {/* <span className="text-gray-500 px-4">Gender - </span> */}
      <div className="flex flex-col">
        <label
          className={`label gap-2 cursor-pointer  font-medium ${
            selectedGender === "male" ? "selected" : ""
          } `}
        >
          <span className="label-text">Male :</span>
          <input
            type="checkbox"
            className="checkbox checkbox-warning border-2"
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
          />
        </label>
      </div>
      <div className="flex flex-col">
        <label
          className={`label gap-2 cursor-pointer font-medium ${
            selectedGender === "female" ? "selected" : ""
          }`}
        >
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            className="checkbox checkbox-warning border-2"
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};
export default GenderCheckbox;
