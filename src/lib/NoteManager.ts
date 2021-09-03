// 音階名、オクターブ、臨時記号の組み合わせから、Noteを生成するモジュール
// importして使う。
import { Note, NoteName, NoteOctave, NoteSymbol } from "@/lib/types";
import LevelManager from "@/lib/LevelManager";
export default {
  generateNote: function(): Note {
    const noteName = this.randomEnum(NoteName);
    const noteSymbol = this.randomEnum(NoteSymbol);
    const noteOctave = this.randomEnum(NoteOctave);
    return noteName + noteSymbol + noteOctave;
  },

  randomEnum: function<T>(anEnum: T): string {
    const enumValues = Object.values(anEnum);
    const randomIndex = Math.floor(Math.random() * enumValues.length);
    const randomEnumValue = enumValues[randomIndex];
    return randomEnumValue;
  },

  generateNoteFromLevel(level: number): Note {
    return LevelManager[level].generateNote();
  },
};
