export function checkNumberPadding(intStrs: string[]): number {
    const strings = [...intStrs]; 

    // Case 1: Empty input
    if (strings.length === 0) return 0;

    let minLength = Infinity;
    let maxLength = -Infinity;
    let minNoPaddingLength = Infinity;
    let paddingLength: number | null = null;

    for (const str of strings) {
        const length = str.length;
        // Update min and max length
        minLength = Math.min(minLength, length);
        maxLength = Math.max(maxLength, length);
       

        // Check if the string has zero-padding
        if (str[0] === '0') {
            if (paddingLength === null) {
                paddingLength = length;
            } else if (paddingLength !== length) {
                return -1; 
            }
        } 
        else {
            if(length === 1){
                return 1

            }else{
            minNoPaddingLength = Math.min(minNoPaddingLength, length);
            }
        }
    }

    // Case 2: All strings are the same length and padded consistently
    if (minLength === maxLength && paddingLength !== null) {
        return paddingLength;
    }

    // Case 3: Mixed padded and non-padded strings
    if (paddingLength !== null) {
        return Math.max(paddingLength, minLength);
    }

    // Case 4: No padding is observed, return the smallest non-padded length
    if (minNoPaddingLength !== Infinity) {
        return -minNoPaddingLength;
    }

    // Case 5: No padding found
    return 1;
}

// Test Cases

console.log('["001", "002"]---------------->',checkNumberPadding(["001", "002"])); 
console.log('["001", "002", "9999"]---------------->',checkNumberPadding(["001", "002", "9999"])); 
console.log('["1", "2", "999"]---------------->',checkNumberPadding(["1", "2", "999"])); 
console.log('["999", "9999"]---------------->',checkNumberPadding(["999", "9999"])); 
console.log('["99", "999", "9999"]---------------->',checkNumberPadding(["99", "999", "9999"])); 
console.log('["01", "002"]---------------->',checkNumberPadding(["01", "002"]));
console.log('[]---------------->',checkNumberPadding([]));
