import { PEmployee } from "../types/emp";

type Props = {
  item: PEmployee;
};
export default function EmpCard({
  item: {
    firstName = "Example",
    lastName = "Example",
    email = "ex@ex.com",
    phone = "1235668999",
  },
}: Props) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h3 className="card-title">
          {firstName} {lastName}
        </h3>
        <p className="card-text font-bold">{email}</p>
        <p className="card-text">{phone}</p>
      </div>
    </div>
  );
}
