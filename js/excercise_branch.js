//演習
//年齢によって、テーマパークの入場料を出し分けてコンソールで表示
//(概要)
//大人（12歳以上の者）5000円～
//中人(6歳以上12歳未満の者)2,500円～
//小人(6歳未満の者)1,000円～

var age = 12;
if (age >= 12){
  console.log('5000円');
} else if (age >= 6) {
  console.log('2,500円');
} else {
  console.log('1,000円');
}