// 音階名、オクターブ、臨時記号の組み合わせから、Noteを生成するモジュール
// importして使う。
import { NoteName, NoteOctave, NoteSymbol } from "@/lib/types";
export default {
  generateNote: function() {
    //今はmock
    const array = ["C4", "D4", "E4", "F4", "G4"];
    console.log("更新");
    return array[Math.floor(Math.random() * array.length)];
  },
};
