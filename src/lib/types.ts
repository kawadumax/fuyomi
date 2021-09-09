export enum Result {
  None,
  Correct,
  Incorrect,
}

export type Note = string
;export enum NoteName {
  C = "C",
  D = "D",
  E = "E",
  F = "F",
  G = "G",
  A = "A",
  B = "B",
}

export enum NoteSymbol {
  None = "",
  Natural = "n",
  Sharp = "#",
  Flat = "b",
}

export enum NoteOctave {
  Zero = "0",
  One = "1",
  Two = "2",
  Three = "3",
  Four = "4",
  Five = "5",
  Six = "6",
  Seven = "7",
  Eight = "8",
}

export default {
  Result,
  NoteName,
  NoteSymbol,
  NoteOctave,
}
