import { useState } from "react";

const FormTodo = ({ ...props }) => {
  const [input, setInput] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    {
      props.addTodo(input, description);
    }
    setInput("");
    setDescription("");
  };

  return (
    <div className="text-center">
      <div>
        <div className="p-5 font-bold text-4xl text-white">TODO LIST APP</div>
        <div className="">
          <form onSubmit={handleSubmit} className="p-5">
            <p className="text-white">Task</p>
            <input
              className="md:m-2 p-2 px-5 md:w-1/2 w-full rounded-lg"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="new task"
            />
            <br></br>
            <p className="text-white">Description</p>
            <textarea
              className="md:m-2 p-2 px-5 md:w-1/2 w-full rounded-lg"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="description"
            />

            <br></br>
            <button
              type="submit"
              className="bg-indigo-900 p-2 mt-5 px-5 text-white hover:bg-[#52525b] w-32 rounded-xl"
            >
              Submit task
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormTodo;
