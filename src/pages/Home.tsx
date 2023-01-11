import { useState, useEffect } from "react";
import axios from "axios";

import Layout from "../components/Layout";
import FormTodo from "../components/FormTodo";
import ListTodo from "../components/ListTodo";
import { TodoType } from "../utils/todos/todo";

interface PropsType {}
interface StateType {
  loading: boolean;

  todos: TodoType[];
}

const Home = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios
      .get(`https://api.todoist.com/rest/v2/tasks`, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      })
      .then((data) => {
        //console.log("data", data.data);

        setTodos(data.data);
      })

      .catch((error) => alert(error.toString()))
      .finally(() => setLoading(false));
  }

  function createTodo(text: any, description: any, date: any) {
    const todo = {
      content: text,
      description: description,
      due_date: date,
    };
    if (text !== "" && description !== "") {
      axios
        .post(`https://api.todoist.com/rest/v2/tasks`, todo, {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
          },
        })
        .then((response) => {
          //console.log("databaru", response);
          setTodos([response.data, ...todos]);
          alert("Berhasil menambahkan todo");
        })
        .catch((error) => {
          alert(error.toString());
        })
        .finally(() => setLoading(false));
    }
  }

  // function handleDeletee(data: TodoType) {
  //   axios
  //     .delete(`https://api.todoist.com/rest/v2/tasks`, {
  //       headers: {
  //         Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
  //       },
  //     })
  //     .then((data) => {
  //       console.log("data", data.data);

  //       setTodos(data.data);
  //     })

  //     .catch((error) => alert(error.toString()))
  //     .finally(() => setLoading(false));
  // }
  function handleDelete(data: TodoType) {
    let dupeDatas: TodoType[] = todos.slice();
    const filterData = dupeDatas.filter((item) => item.id !== data.id);
    setTodos(filterData);
    alert(`Delete from todo list`);
  }
  function editTodo(text: any) {
    const todo = {
      content: text,
    };
    if (text !== "") {
      axios
        .put(`https://api.todoist.com/rest/v2/tasks`, todo, {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
          },
        })
        .then((response) => {
          //console.log("dataedit", response);
          setTodos([response.data, ...todos]);
          alert("Berhasil mengubah todo");
        })
        .catch((error) => {
          alert(error.toString());
        });
    }
  }

  return (
    <>
      <Layout>
        <FormTodo addTodo={createTodo} />
        <div className="flex flex-wrap justify-center px-5">
          {todos.map((data) => (
            <ListTodo
              key={data.id}
              id={data.id}
              content={data.content}
              onClickDel={() => handleDelete(data)}
              onClickEdit={() => editTodo(data)}
            />
          ))}
        </div>
      </Layout>
    </>
  );
};

export default Home;
