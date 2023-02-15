function solution(letter) {
  const morse = { 
  '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
  '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
  '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
  '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
  '-.--':'y','--..':'z'
  };
  return letter.split(" ").map(element => morse[element]).join("");
}

solution(".... . .-.. .-.. ---");

// 다른 풀이 (reduce 사용)
// morse = { 
//   '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
//   '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
//   '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
//   '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
//   '-.--':'y','--..':'z'
// }

// function solution(letter) {
//   return letter.split(' ').reduce((prev, curr) => prev + morse[curr], '')
// }
