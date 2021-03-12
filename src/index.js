module.exports = function toReadable (number) {
    const onesAndTeens = ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    const tens = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];

    const arrayNum = String(number).split('').map(Number);
    const firsIndex = arrayNum[0];
    const secondIndex = arrayNum[1];
    const thirdIndex = arrayNum[2];
    const teenIndex = Number(String(number).slice(1))

    if(!number) {return 'zero'};
    if(number === 0) {return 'zero'};
    if(number <= 19) {return onesAndTeens[number]};
    if(number >= 20 && number <= 99) {return `${tens[firsIndex]} ${onesAndTeens[secondIndex]}`.replace(/\s+/g, ' ').trim()};

    if(number >= 100 && number <= 999) {
        if(teenIndex < 20 && teenIndex > 9) {
            return `${onesAndTeens[firsIndex]} hundred ${onesAndTeens[teenIndex]}`.replace(/\s+/g, ' ').trim(); 
        } else {
            return `${onesAndTeens[firsIndex]} hundred ${tens[secondIndex]} ${onesAndTeens[thirdIndex]}`.replace(/\s+/g, ' ').trim();
        };       
    };    
    
    if(number === 1000) {return 'thousand'};
}
