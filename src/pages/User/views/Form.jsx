import { useState } from "react";
import { useUser } from "@context/user";
import {
  cellphoneValidator,
  emailValidator,
  lastnameValidator,
  nameValidator,
  onlyLettersValidator,
  onlyNumbersValidator,
} from "@common/validators";
import Toast from "@components/Toast";
import { useEffect } from "react";

const INPUT_DATE_LIMIT = new Date().toISOString().split("T")[0];

function calculateAge(birthday) {
  var ageDifMs = Date.now() - birthday;
  var ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export default function Form() {
  const { register } = useUser();
  const [form, setForm] = useState({
    name: "",
    lastname: "",
    phone: "",
    email: "",
    birthday: "",
    age: "",
    genere: "",
  });
  const [showToast, setShowToast] = useState(false);
  const [messageError, setMessageError] = useState("");

  useEffect(() => {
    if (!form.birthday) {
      setForm({ ...form, age: "" });
      return;
    }
    const age = calculateAge(new Date(form.birthday));
    setForm({ ...form, age: age.toString() });
  }, [form.birthday]);

  const handleInputChange = (event, field) => {
    setForm({ ...form, [field]: event?.target?.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!cellphoneValidator(form.phone) || !form.phone) {
      console.error("Error phone");
      setMessageError("Error at phone number field. Only 10 numbers.");
      handleShowToast();
      return;
    }
    if (!emailValidator(form.email) || !form.email) {
      console.error("Error email");
      setMessageError("Error at email field. Valid email.");
      handleShowToast();
      return;
    }
    if (!lastnameValidator(form.lastname) || !form.lastname) {
      console.error("Error lastname");
      setMessageError("Error at lastname field. Valid lastname.");
      handleShowToast();
      return;
    }
    if (!nameValidator(form.name) || !form.name) {
      console.error("Error name");
      setMessageError("Error at name field. Valid name.");
      handleShowToast();
      return;
    }
    if (!form.genere) {
      console.error("Error genere");
      setMessageError("Error at genere field. Genere is required.");
      handleShowToast();
      return;
    }
    if (!form.birthday) {
      console.error("Error birthday");
      setMessageError("Error at birthday field. Birthday is required.");
      handleShowToast();
      return;
    }
    register(form);
  }

  const handleShowToast = () => {
    setShowToast(true);
    setTimeout(() => handleCloseToast(), 3000);
  }

  const handleCloseToast = () => {
    setShowToast(false);
    setMessageError("");
  };

  return (
    <>
      <form>
        <input
          onChange={(e) => {
            if (!onlyLettersValidator(e.target.value)) return;
            handleInputChange(e, "name");
          }}
          value={form.name}
          placeholder="Name"
          type="text"
        />
        <input
          onChange={(e) => {
            if (!onlyLettersValidator(e.target.value)) return;
            handleInputChange(e, "lastname");
          }}
          value={form.lastname}
          placeholder="Lastname"
          type="text"
        />
        <input
          onChange={(e) => {
            if (!onlyNumbersValidator(e.target.value)) return;
            handleInputChange(e, "phone");
          }}
          value={form.phone}
          placeholder="Phone number"
          type="text"
        />
        <input
          onChange={(e) => {
            handleInputChange(e, "email");
          }}
          value={form.email}
          placeholder="Email"
          type="email"
        />
        <input
          onChange={(e) => {
            handleInputChange(e, "birthday");
          }}
          value={form.birthday}
          max={INPUT_DATE_LIMIT}
          placeholder="Birthday"
          type="date"
        />
        <input
          onChange={(e) => {
            handleInputChange(e, "age");
          }}
          value={form.age}
          placeholder="Age"
          type="text"
          disabled
        />
        <select
          value={form.genere}
          onChange={(e) => handleInputChange(e, "genere")}
        >
          <option value="">Select option</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <button
          type="submit"
          onClick={handleSubmit}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit(e);
            };
          }}
        >
          Save
        </button>
      </form>
      {
        showToast && (
          <Toast message={messageError} onClose={handleCloseToast} />
        )
      }
    </>
  );
}