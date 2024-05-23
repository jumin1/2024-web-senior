var lotto = [];
var i, j;
var isSame;

console.log("이번 로또 번호는?");

for (i = 0; i < 6; i++) {
    do {
        lotto[i] = Math.floor(Math.random() * 45) + 1;
        isSame = false;
        for (j = 0; j < i; j++) {
            if (lotto[i] === lotto[j]) {
                isSame = true;
                break;
            }
        }
    } while (isSame);
    
    console.log(lotto[i] + " ");
}


// for (i = 0; i < 6; i++){
//     lotto[i] = Math.floor(Math.random() * 45) + 1;
//     console.log(lotto[i] + " ");
// }



