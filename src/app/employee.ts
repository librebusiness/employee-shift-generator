import { Shift } from './shift';

export interface Employee {
  id: string,
  firstname: string,
  lastname: string,
  email: string,
  phone: string,
  mobile: string,
  photo: string,
  mainShift: Shift,
}
