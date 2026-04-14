import { useContext } from "react";
import { FormContext } from "../context/FormContext";

function Step2() {
  const { formData, setFormData, setStep } = useContext(FormContext);

  return (
    <div>
      <h2>Step 2: Contact Info</h2>

      <input
        placeholder="Email"
        value={formData.email}
        onChange={(e) =>
          setFormData({ ...formData, email: e.target.value })
        }
      />

      <input
        placeholder="Phone"
        value={formData.phone}
        onChange={(e) =>
          setFormData({ ...formData, phone: e.target.value })
        }
      />

      <button onClick={() => setStep(1)}>Back</button>
      <button onClick={() => setStep(3)}>Next</button>
    </div>
  );
}

export default Step2;