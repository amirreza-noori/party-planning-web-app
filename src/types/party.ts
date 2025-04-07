export enum PartyOccasion {
  birthday,
  anniversary,
  dinner,
  meetUp,
  other,
}
export enum PartySize {
  small,
  medium,
  large,
}

export type Party = {
  type: PartyOccasion;
  size: PartySize;
  name: string;
  time: Date;
  budget: number;
};
