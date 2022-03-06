// 1. set alphabetStart"ABC~~"" and alphabetEnd"NOP~~" first. 
// 2. set decodedResult so that we can see the result. and write it in return.
// write the "let result=" at the end and check with console.log. 
// 3. take alphabet from varibales with "for" statement.
// 4. str.split("")

function rot13(str) {
    let decodedResult = "";
    let alphabetStart = "ABCDEFGHIJKLM";
    let alphabetEnd = "NOPQRSTUVWXYZ";

    str.split("").forEach(function(letterToDecode, index) {
        let alphabetStartIndex = alphabetStart.indexOf(letterToDecode);
        let alphabetEndIndex = alphabetEnd.indexOf(letterToDecode);

            if (alphabetStartIndex >= 0) {
                decodedResult += alphabetEnd[alphabetStartIndex];
                //console.log(letterToDecode);
            } else if (alphabetEndIndex >= 0) {
                decodedResult += alphabetStart[alphabetEndIndex];
                //console.log(letterToDecode);
            } else {
                decodedResult += letterToDecode; // for spaces 
            }
        });
    return decodedResult;
    }

let result = rot13("SERR PBQR PNZC");
console.log(result);
