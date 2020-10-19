module.exports = function toReadable(number) {

    let numStr = '';
    let num;
    let numDec;
    let numHundred;
    let arrNumber = ['zero', 'one', 'two', 'three', 'four', 'five',
        'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen',
        'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];
    let arrDec = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty',
                    'sixty', 'seventy', 'eighty', 'ninety']

    let str = String(number);

    if (str.length === 1) {
        numStr = arrNumber[number];
    } else if (str.length === 2) {
        if (str[0] === '1') {
            numStr = arrNumber[number];
        } else if (str[1] === '0') {
            numDec = Math.floor(number / 10);
            numStr = arrDec[numDec];
        } else {
            numDec = Math.floor(number / 10);
            num = number % 10;
            numStr = arrDec[numDec] + ' ' + arrNumber[num];
        }
    } else {
        numHundred = Math.floor(number / 100);
        if (str[1] === '0' && str[2] === '0') {
            numStr = arrNumber[numHundred] + ' hundred';

        } else if (str[1] === '1' && str[2] === '0') {
            num = number % 100 / 10;
            numStr = arrNumber[numHundred] + ' hundred ' + arrDec[num];
            console.log(numStr);
        } else if (str[1] === '1' || str[1] === '0') {
            num = number % 100;
            numStr = arrNumber[numHundred] + ' hundred ' + arrNumber[num];
        } else if (str[2] === '0') {
            num = Math.floor((number % 100)) / 10;
            numStr = arrNumber[numHundred] + ' hundred ' + arrDec[num];
        } else {
            numDec = Math.floor((number % 100) / 10);
            num = (number % 10) % 10;
            numStr = arrNumber[numHundred] + ' hundred ' + arrDec[numDec] + ' ' + arrNumber[num];
        };
    };
    console.log(numStr.length)
    console.log(str.length)
    return numStr;
}
