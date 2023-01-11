import { BsTrashFill } from "react-icons/bs";
import { FC } from "react";
import { FiEdit2 } from "react-icons/fi";

interface ListProps {
  id: any;
  content: any;
  onClickDel?: () => void;
  onClickEdit?: () => void;

  // created: any;

  //detailTodo?:()=>void;
}

const ListTodo: FC<ListProps> = ({ id, content, onClickDel, onClickEdit }) => {
  function detailTodo() {
    // navigate(`${detail_id}`);
  }

  return (
    <div className="w-full p-3">
      <div className="p-2 mx-2 bg-white justify-between align-middle rounded-lg shadow-lg h-full">
        <div className="p-2 lg:p-5 cursor-pointer hover:bg-[#e2e8f0] rounded-md bg-gray-200 h-auto">
          <div className="text-lg">{content}</div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a className="m-3 cursor-pointer text-2xl align-middle hover:bg-[#dc2626]">
              <FiEdit2 onClick={onClickEdit} />
            </a>
          </div>

          <a className="m-3 cursor-pointer text-2xl align-middle hover:bg-[#dc2626]">
            <BsTrashFill onClick={onClickDel} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ListTodo;
