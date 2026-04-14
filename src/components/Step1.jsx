import { useContext } from "react";
import { FormContext } from "../context/FormContext";

function Step1() {
  const { formData, setFormData, setStep } = useContext(FormContext);

  return (
    <div>
      <h2>Step 1: Personal Info</h2>

      <input
        placeholder="Name"
        value={formData.name}
        onChange={(e) =>
          setFormData({ ...formData, name: e.target.value })
        }
      />

      <input
        placeholder="Age"
        value={formData.age}
        onChange={(e) =>
          setFormData({ ...formData, age: e.target.value })
        }
      />

      <button onClick={() => setStep(2)}>Next</button>
    </div>
  );
}

export default Step1;