import { useContext } from "react";
import { FormContext } from "../context/FormContext";

function Step3() {
  const { formData, setStep } = useContext(FormContext);

  return (
    <div>
      <h2>Review</h2>

      <p>Name: {formData.name}</p>
      <p>Age: {formData.age}</p>
      <p>Email: {formData.email}</p>
      <p>Phone: {formData.phone}</p>

      <button onClick={() => setStep(2)}>Back</button>
      <button onClick={() => alert("Form Submitted!")}>
        Submit
      </button>
    </div>
  );
}

export default Step3;