import EmpList from "../components/emp-list";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="container mt-5">
      <div className="row">
        <h1 className="text-center">Employee List</h1>
        <div className="text-center">
          <button
            className="btn btn-primary"
            onClick={() => navigate("/emp/add")}
          >
            Add new Employee
          </button>
        </div>
      </div>
      <EmpList />
    </div>
  );
}
