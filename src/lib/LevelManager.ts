// Levelを分けておく

const Level0 = {
  availableNote: ["F4", "A4", "C5", "E5"],
  generateNote() {
    return this.availableNote[
      Math.floor(Math.random() * this.availableNote.length)
    ];
  },
};

const Level1 = {
  availableNote: ["F4", "G4", "A4", "B4", "C5", "D5", "E5"],
  generateNote() {
    return this.availableNote[
      Math.floor(Math.random() * this.availableNote.length)
    ];
  },
};

// importして使う。
export default [Level0, Level1];
