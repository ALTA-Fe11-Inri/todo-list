import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { TodoType } from "../utils/todos/todo";

interface PropsType {
  params?: any;
}

interface StateType {
  todos: TodoType;
}

const Detail = () => {
  const { detail_id } = useParams();

  const [todos, setTodos] = useState<TodoType[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios
      .get(`https://api.todoist.com/rest/v2/tasks/${detail_id}`, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      })
      //  ..then((todo) => {
      //     setTodos(data.data);
      //   })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <Layout>
      <div>
        {/* <div className="lg:mx-20 p-4 rounded-md ">
        <div className="bg-white p-3 rounded-md mt-5">
          <div className="p-2 w-full rounded-md text-2xl bg-gray-200 font-bold">
            {data.content}
          </div>
        </div>

        <div className="my-5 p-3 rounded-md bg-white min-h-[50vh] flex flex-col justify-between text-lg shadow-lg">
          {todos.description }
          
          <div className="flex justify-between">
            <div className="text-sm p-2">
              <div>
                {"date created: "}
                {created}             

            <div className="pt-2 flex text-white">
              <a>
                <button
                  className="bg-indigo-500 hover:bg-indigo-300 p-2 rounded-sm"
                  onClick={() => edit()}
                >
                  edit
                </button>
              </a>
            </div>
          </div>
        </div>
      </div> */}
      </div>
    </Layout>
  );
};

export default Detail;
