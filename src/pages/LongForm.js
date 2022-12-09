import React, { useReducer } from "react";
import { reducer, initialState } from "../state/formReducer";

const LongForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const submit = (event) => {
    event.preventDefault();
    console.log(state);
  };

  return (
    <div className="w-full max-w-xl   bg-gradient-to-tr to-purple-100 from-cyan-100 p-2 rounded-md">
      <div className="bg-white rounded-md p-10 pt-4">
        <h1 className="text-center text-gray-400">Long Form</h1>
        <form className="" onSubmit={submit}>
          <div className="flex flex-col max-w-xs gap-2">
            <label htmlFor="name">First Name </label>
            <input
              className="border-gray-200 border"
              placeholder="Type here last name"
              type="text"
              name="firstName"
              id="firstName"
              onBlur={(e) =>
                dispatch({
                  type: "INPUT",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
            />
          </div>
          <div className="flex flex-col max-w-xs gap-2">
            <label htmlFor="name">Last Name </label>
            <input
              className="border-gray-200 border"
              placeholder="Type here last name"
              type="text"
              name="lastName"
              id="lastName"
              onBlur={(e) =>
                dispatch({
                  type: "INPUT",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
            />
          </div>
          <div className="flex flex-col max-w-xs gap-2">
            <label htmlFor="name">Email </label>
            <input
              className="border-gray-200 border"
              placeholder="Type here email"
              type="email"
              name="email"
              id="email"
              onBlur={(e) =>
                dispatch({
                  type: "INPUT",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
            />
          </div>
          <div className="flex flex-col max-w-xs gap-2">
            <label htmlFor="name">Education </label>
            <select
              onChange={(e) =>
                dispatch({
                  type: "INPUT",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
              name="education"
              id="education"
              className="select w-full max-w-xs border-gray-200 border"
            >
              <option disabled selected>
                Select
              </option>
              <option value="SSC">SSC</option>
              <option value="HSC">HSC</option>
              <option value="BBA">BBA</option>
              <option value="MBA">MBA</option>
              <option value="MSS">MSS</option>
            </select>
          </div>
          <div className="flex flex-col max-w-xs gap-2">
            <label htmlFor="name">Feedback </label>
            <textarea
              onBlur={(e) =>
                dispatch({
                  type: "INPUT",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
              name="feedback"
              id="feedback"
              className="textarea border-gray-200 border"
              placeholder="Feedback."
            ></textarea>
          </div>
          <div className="flex flex-col max-w-xs gap-2">
            <label htmlFor="name">Gender </label>
            <div className="flex  max-w-xs gap-2">
              Male
              <input
                type="radio"
                id="Male"
                value="male"
                name="gender"
                onClick={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
                className="radio"
              />
              Female
              <input
                type="radio"
                id="Female"
                name="gender"
                onClick={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
                className="radio"
              />
              Others
              <input
                type="radio"
                id="Other"
                name="gender"
                onClick={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
                className="radio"
              />
            </div>
          </div>
          <div className="flex  gap-5 mt-2 border-gray-200 border first:">
            <button
              onClick={() => dispatch({ type: "DECREMENT" })}
              className="px-3 py-2  bg-purple-200 rounded-lg"
            >
              --
            </button>
            <span className=" mb-5 text-center text-1xl">{state.quantity}</span>
            <button
              onClick={() => dispatch({ type: "INCREMENT" })}
              className="px-3 py-2  bg-cyan-200 rounded-lg"
            >
              +
            </button>
          </div>
          <div className="">
            <label className="label cursor-pointer">
              <span className="label-text p-2">Agree tram and condition</span>
              <input
                type="checkbox"
                onClick={(e) => dispatch({ type: "TOGGLE" })}
                className="checkbox"
              />
            </label>
          </div>

          <div className="flex  py-2 gap-5">
            <button
              type="submit"
              disabled={!state.term}
              className="px-3 py-2  bg-purple-200 rounded-lg"
            >
              {" "}
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LongForm;
