import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const FormValidation = ({ setFormData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    age: 0,
    confirm: null,
    guestName: "",
  });

  const onSubmit = () => {
    console.log(data);
    setFormData(data);
    navigate("/data-display");
  };

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    setData((prevData) => ({
      ...prevData,
      confirm: value,
      guestName: value === "yes" ? prevData.guestName : "",
    }));
  };

  useEffect(() => {
    setValue("guestName", data.guestName);
  }, [data.guestName, setValue]);
  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-slate-400 p-10 rounded-lg">
        <p className="text-3xl p-10">Event Registartion</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col items-start">
            <input
              type="text"
              placeholder="Enter the name"
              className="px-10 py-1 m-5 rounded-lg bg-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-50"
              {...register("name", {
                required: "Name is required",
                onChange: (e) =>
                  setData((prevData) => ({
                    ...prevData,
                    name: e.target.value,
                  })),
              })}
            ></input>
            {errors.name && (
              <p className="text-sm text-red-500 ml-5">{errors.name.message}</p>
            )}
            <input
              type="email"
              placeholder="email"
              className="px-10 py-1 m-5 rounded-lg bg-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-50"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email address",
                },
                onChange: (e) =>
                  setData((prevData) => ({
                    ...prevData,
                    email: e.target.value,
                  })),
              })}
            ></input>
            {errors.email && (
              <p className="text-sm text-red-500 ml-5">
                {errors.email.message}
              </p>
            )}

            <input
              type="number"
              placeholder="Age"
              className="px-10 py-1 m-5 rounded-lg bg-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-50"
              {...register("age", {
                required: "Age is required",
                onChange: (e) =>
                  setData((prevData) => ({
                    ...prevData,
                    age: parseInt(e.target.value),
                  })),
              })}
            ></input>
            {errors.age && (
              <p className="text-sm ml-5 text-red-500">{errors.age.message}</p>
            )}
            <div className="inline-flex items-center gap-5 m-5">
              <label>
                <input
                  type="checkbox"
                  checked={data.confirm === "yes"}
                  value="yes"
                  name="guest"
                  {...register("confirm")}
                  onChange={handleCheckboxChange}
                  className="transform scale-150 ml-5 p-2"
                ></input>
                <span className="text-lg p-2">Yes</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={data.confirm === "No"}
                  value="No"
                  name="guest"
                  {...register("confirm")}
                  onChange={handleCheckboxChange}
                  className="transform scale-150 ml-5 p-2"
                ></input>
                <span className="text-lg p-2">No</span>
              </label>
            </div>

            {data.confirm === "yes" && (
              <div>
                <input
                  type="text"
                  placeholder="Enter the guest name"
                  className="px-5 py-1 rounded-lg bg-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-50 ml-5"
                  {...register("guestName", {
                    required: "Guest name is required",
                  })}
                  value={data.guestName}
                  onChange={(e) =>
                    setData({ ...data, guestName: e.target.value })
                  }
                />
                {errors.guestName && (
                  <p className="text-red-500 ml-5">
                    {errors.guestName.message}
                  </p>
                )}
              </div>
            )}
            <button className="bg-slate-300 px-5 p-2 rounded-lg m-5 opacity-50 hover:opacity-100">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormValidation;
