export interface User {
  id: number;
  fullName: string;
  email: string;
  phone: number;
  role: "ADMIN" | "MANAGER" | "STAFF" | "CUSTOMER";
}
