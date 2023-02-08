function main() {
    var n = Number(prompt("How many times flip the coin"));
    var heads = 0;
    var tails = 0;
    for(var i = 0; i <= n; i++) {
        if(Math.random() < 0.50) {
            heads++;
        }
        else {
            tails++;
        }
    }
}