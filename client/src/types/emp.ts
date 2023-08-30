export type PEmployee = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

export type AddEmployee = Omit<PEmployee, "_id">;
