const day = process.argv[2];
const month = process.argv[3];

if(month === '3' && day >= 20) {
    console.log(true);
}
else if(month === '6' && day <= 20) {
    console.log(true);
}
else if (month === '04' || month === '05') {
    console.log(true);
}else{
    console.log(false);
}