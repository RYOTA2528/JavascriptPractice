//条件分岐

//変数xを宣言すると同時に整数を代入。
var x = 99;
//変数xの値が100以上だったら,”100以上です”とコンソールで表示
//変数が100未満だったら、'100未満の値です'とコンソールで表示
if (x >= 100) {
  console.log('100以上の値です');
} else {
  console.log('100未満の値です');
}


//if  /else if /else
//テストの点数腕の出力
//90点以上A,80点以上B,60点以上C,60点未満D
var y = 90;
if(y <= 90){
  console.log('A')
}
else if(y >= 80){
  consol.log('B')
} else if(y >= 60) {
  console.log('C')
} else {
  console.log('D');
}