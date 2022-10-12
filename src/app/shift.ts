export enum Day {
  MONDAY = 'monday',
  TUESDAY = 'tuesday',
  WEDNESDAY = 'wednesday',
  THURSDAY = 'thrusday',
  FRIDAY = 'friday',
  SATURDAY = 'saturday',
  SUNDAY = 'sunday',
}

export type ShiftType = 'regular' | 'rotative';

export interface Shift {
  id: string,
  name: string,
  days: Day[],
  starts: number,
  ends: number,
  shiftType: ShiftType,
}
