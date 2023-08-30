import { useRef } from "react";
import useMutate from "../hooks/useMutate";
import { Navigate, useNavigate } from "react-router-dom";
import { AddEmployee } from "../types/emp";
export default function AddPage() {
  const firstName = useRef<string>("");
  const lastName = useRef<string>("");
  const email = useRef<string>("");
  const phone = useRef<string>("");
  const navigate = useNavigate();
  // @ts-ignore
  const { isLoading, isSuccess, error, mutate } = useMutate("/emp", "POSTP");

  const handleAddEmp = () => {
    console.log(
      `firstName: ${firstName.current} / LastName: ${lastName.current} / Email: ${email.current} / Phone: ${phone.current} `
    );
    // here goes for the logic of adding new emp
    const dataToSend: AddEmployee = {
      firstName: firstName.current,
      lastName: lastName.current,
      email: email.current,
      phone: phone.current,
    };
    // @ts-ignore
    mutate(dataToSend);
  };
  if (isSuccess) return <Navigate to="/" />;
  if (error)
    return (
      <div className="p-4">
        <h1>Error</h1>
        <button className="btn btn-dark" onClick={() => navigate("/")}>
          Back to home
        </button>
      </div>
    );
  return (
    <div className="container mt-5">
      <div className="row">
        <h1 className="text-center">Add new Employee</h1>
      </div>
      <div className="form-container mt-5">
        <div className="form-group mt-3">
          <label htmlFor="firstName" className="label-control">
            firstName
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="firstName .."
            onChange={(e) => (firstName.current = e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="lastName" className="label-control">
            lastName
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="lastName .."
            onChange={(e) => (lastName.current = e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="email" className="label-control">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="email .."
            onChange={(e) => (email.current = e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="email" className="label-control">
            Phone
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="phone .."
            onChange={(e) => (phone.current = e.target.value)}
          />
        </div>
        <div className="mt-3">
          <button className="btn btn-primary" onClick={handleAddEmp}>
            <div className="row">
              {isLoading && (
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              )}
              <span className="ml-2">Add</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
