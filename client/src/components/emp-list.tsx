import useFetch from "../hooks/useFetch";
import { PEmployee } from "../types/emp";
import EmpCard from "./emp-card";

export default function EmpList() {
  // @ts-ignore
  const { data, isLoading, error } = useFetch("/emp", "employees");
  console.log(data);

  return (
    <div className="mt-5">
      <div className="row">
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>Error...</h1>}
        {data &&
          data.map((item: PEmployee) => {
            return (
              <div className="col-md-4" key={item._id}>
                <EmpCard item={item} />
              </div>
            );
          })}
      </div>
    </div>
  );
}
