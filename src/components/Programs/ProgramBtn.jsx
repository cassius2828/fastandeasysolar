export const ProgramBtn = ({
  programNum,
  title,
  setSelectedProgram,
  selectedProgram,
}) => {
  return (
    <span
      onClick={() => setSelectedProgram(programNum)}
      className={` cursor-pointer relative -top-10  shadow-lg p-4 text-gray-200 bg-blue-500 rounded-full flex justify-center items-center min-w-40 text-3xl font-bold ${
        selectedProgram !== programNum && "bg-gray-600"
      }`}
    >
      {title}
    </span>
  );
};
