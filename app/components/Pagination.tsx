import { Dispatch, SetStateAction } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

interface PaginationProps {
  dataLength: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const Pagination: React.FC<PaginationProps> = ({ dataLength, currentPage, setCurrentPage }) => {
  const startPage = Math.floor((currentPage - 1) / 10) * 10 + 1;
  const lastPage = Math.min(startPage + 9, Math.ceil(dataLength / 10));
  const pageCountElement = [];
  for (let i = startPage; i < lastPage + 1; i++) {
    pageCountElement.push(
      <p
        key={i}
        className={`${
          currentPage === i
            ? "text-indigo-700 font-bold border-indigo-700"
            : "text-gray-600 font-medium border-transparent"
        } text-sm leading-none cursor-pointer hover:text-indigo-900 border-t hover:border-indigo-600 pt-3 mr-4 px-2`}
        onClick={() => setCurrentPage(i)}
      >
        {i}
      </p>
    );
  }

  return (
    <div className="flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4">
      <div className="lg:w-3/5 w-full  flex items-center justify-between border-t border-gray-200">
        <div
          onClick={() => {
            if (currentPage > 1) {
              setCurrentPage(currentPage - 1);
            }
          }}
          className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer"
        >
          <AiOutlineArrowLeft size={14} />
          <p className="text-sm ml-3 font-medium leading-none ">Previous</p>
        </div>
        <div className="sm:flex hidden">{pageCountElement}</div>
        <div
          onClick={() => {
            if (currentPage < dataLength / 10) {
              setCurrentPage(currentPage + 1);
            }
          }}
          className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer"
        >
          <p className="text-sm font-medium leading-none mr-3">Next</p>
          <AiOutlineArrowRight size={14} />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
