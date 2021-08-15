module.exports = function toReadable(number) {
    let numbers1 = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen"]
    let numbers2 = [
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety',
        'one hundred']



    let line = number.toString().split('').reverse()
    let finString = ''
    if (number === 0) { return 'zero' }
    for (let i = 1; line.length >= i; i++) {
        switch (i) {
            case 1: if (line[0] == 0) {
                break
            } else {
                finString = numbers1[line[0]]
            }

                break

            case 2:
                if (line[1] == 0) {
                    break

                } else {


                    if (line[1] == 1) {
                        finString = numbers1[(line[1] + line[0])]

                    } else {
                        finString = numbers2[(line[1] - 2)] + ' ' + finString

                    }
                    break
                }
            case 3: finString = numbers1[line[2]] + ' hundred ' + finString
                break

            default: break
        }
    }
    return finString.trim()
};

