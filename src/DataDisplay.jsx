import { useNavigate } from "react-router-dom";
import tick from "./assets/checked.png";

const dataDisplay = ({ formData }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  if (!formData) {
    return (
      <div className="flex flex-col items-center mt-10">
        <p className="text-lg">No data available</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md"
          onClick={handleBack}
        >
          Go Back to Form
        </button>
      </div>
    );
  }

  console.log(formData);

  return (
    <div>
      <div className="flex flex-row items-center gap-5">
        <p className="text-5xl">Successfully Registered</p>
        <img src={tick} className="w-14"></img>
      </div>

      <div className="flex flex-col bg-white px-10 items-center mt-10 space-y-4 text-lg">
        {formData && (
          <div className="flex flex-col items-start px-10 py-5 ">
            <p className="text-center">Name: {formData.name}</p>
            <p className="text-center">Email: {formData.email}</p>
            <p className="text-center">Age: {formData.age}</p>
            <p className="text-center">Any Guests: {formData.confirm}</p>
            {formData.guestName != "" && (
              <p>Guest Name : {formData.guestName}</p>
            )}
          </div>
        )}
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md"
        onClick={handleBack}
      >
        Go Back to Form
      </button>
    </div>
  );
};

export default dataDisplay;
