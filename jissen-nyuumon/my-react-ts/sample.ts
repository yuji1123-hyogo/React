// @ts-nocheck
// ●10-1-1
// 変数
let age: number = 30;
// 定数
const DEBUG: boolean = true;
// 関数
function getTriangleArea(base: number, height: number) : number {
  return base * height / 2;
}
// クラス
class Person {
  name: string = '';
  age: number = 0;

  toString(): string {
    return `Person: ${this.name}（${this.age}歳）`;
  }
}

console.log(age);
console.log(DEBUG);

let p = new Person();
p.name = 'Taro Yamada';
p.age = 20;
console.log(p.toString());


// NGコード
age = '30歳';
console.log(age.trim());

// ●10-1-2
// 論理型
let flag: boolean = false;
// 数値型
let pi: number = 3.14159265359;
// 文字列型
let title: string = '速習React';
// 配列型
let languages: string[] = ['JavaScript', 'PHP', 'Python', 'Ruby'];
// タプル型
let person: [string, number, boolean] = ['佐藤三郎', 50, false];
// 連想配列型
let addresses:  {[index: string]: string;} = {
  '佐藤彰浩': '東京都東京市東京町1-1-1',
  '田中誠二': '大阪府大阪市大阪町2-2-2',
  '明石一平': '福岡県福岡市福岡町3-3-3',
};
// オブジェクト型
let member: {
  name: string,
  age: number,
  married?: boolean
} = {
  name: '佐藤三郎',
  age: 50,
  married: false
};

console.log(flag);
console.log(pi);
console.log(title);
console.log(languages);
console.log(person);
console.log(addresses);
console.log(member);

// ○配列型
let data: number[][] = [
  [10, 11, 12],
  [20, 21, 22],
  [30, 31, 32]
];

console.log(data);
console.log(data[1][1]);

// ○オブジェクト型リテラル
let member: {
  name: string,
  age: number,
  married?: boolean
} = {
  name: '佐藤三郎',
  age: 50,
};

console.log(member);

// 省略可能の「?」は、関数の仮引数でも利用
function circle(radius?: number) {
  return ((radius ?? 1) ** 2) * Math.PI;
}

function circle(radius: number = 1) {
  return (radius ** 2) * Math.PI;
}

console.log(circle(3));

// ●10-1-3
// ○void 型
function greet(name: string): void {
  console.log(`こんにちは、${name}さん！`);
}
greet('Yamada');

// ○any 型
let age: any;
age = 30;
age = '年齢';
console.log(age);

// ○never 型
function myFunc(): never {
  throw new Error('Error is occured!!');
}
console.log(myFunc());

// ○unknown 型
let age: unknown;
age = 30;
age = '年齢';
age = true;
console.log(age);

// substringメソッドを呼び出す場合
let age: unknown;
age = '年齢';
console.log(age.substring(1));

if (typeof age === 'string') {
  console.log(age.substring(1));
}

// ●10-1-4
// ○共用体型（Union Types）
let age: string | number;
age = '三〇歳';
age = 30;
console.log(age);

let list: (string|number)[] = ['佐藤三郎', 50, 'male'];
console.log(list[1]);

// 引数 radius が負数の場合は boolean 値（false）を返すcircle関数
function circle(radius: number): number | boolean {
  // 負数であればfalse
  if (radius < 0) return false;
  // 本来の戻り値はnumber
  return (radius ** 2) * Math.PI;
}
console.log(circle(-3));

// ○null 許容型
// let msg: string = null;
let msg: string | null = null;
console.log(msg);

// ○ジェネリクス
let list: Array<string> = ['React', 'Vue', 'Angular'];
console.log(list[1]);

let s = new Set<number>([1, 2, 3]);
let m = new Map<string, number>([
  ['React', 50],
  ['Vue', 30],
  ['Angular', 10]
]);
console.log(s);
console.log(m);

// ○型エイリアス
type BookType  = {
  title: string,
  price: number,
  download: boolean
};

let b: BookType = {
  title: '速習React',
  price: 500,
  download: true
};
console.log(b);

// ○インターフェイス
interface BookType {
  title: string;
  price: number;
  download: boolean;
};

let book: BookType = {
  title: '速習React',
  price: 500,
  download: true
};
console.log(book);