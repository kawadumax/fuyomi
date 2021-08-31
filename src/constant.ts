export enum Result {
  None,
  Correct,
  Incorrect,
}

export enum NoteName {
  C = "C",
  D = "D",
  E = "E",
  F = "F",
  G = "G",
  A = "A",
  B = "B",
}

export enum NoteSymbol {
  Natural,
  Sharp,
  Flat,
}

export enum NoteOctave {
  Zero = 0,
  One,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
}

export default {
  Result,
  NoteName,
  NoteSymbol,
  NoteOctave,
};
