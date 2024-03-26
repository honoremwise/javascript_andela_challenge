/**
 * Returns array of prime elements in the array
 * @param {*} numbers 
 * @returns 
 */
function getPrimes(numbers=[]){
    let numbersLen=numbers.length;
    let newNumbers=[];
    for(let i=0;i<numbersLen;i++){
       var elementTest=0;
      for(let j=1;j<=numbers[i];j++){
        if(numbers[i]%j==0){
          elementTest+=1;
        }else{
          elementTest+=0;
        }
      }
      if(elementTest==2){
        newNumbers[newNumbers.length]=numbers[i];
      }
    }
    return newNumbers;
  }
  /**
   * Testing if a string is palindrome or not
   * @param {*} testString 
   * @returns 
   */
  
  function testPalindrome(testString){
    let varString=testString.toLowerCase();
    let strArray=varString.split('');
    let strReverse=strArray.reverse();
    let pal=varString==strReverse.join('')? "Palindrome":"Not palindrome";
    return pal;
  }
  /**
   * Reverse an array, no built in function is used
   * @param {*} arr 
   * @returns 
   */
  function arrayReverse(arr=[]){
    let interArray=[];
    for(let i=(arr.length-1);i>=0;i--){
      interArray[interArray.length]=arr[i];
    }
    return interArray;
  }
  /**
   * 
   * @param {*} arr 
   * @returns 
   */
  function arrayReverseRevise(arr=[]){
    arrLen=arr.length;
    for(let i=arrLen;i>=0;i--){
      arr[arrLen-i]=arr[i];
    }
    return arr;
  }
  /**
   * Sort any array(No built in function is used)
   * @param {*} arr 
   * @returns 
   */
  function sortArray(arr=[]){
    let arrLen=arr.length;
    let min;let temp;let j;
    for(let i=0;i<arrLen;i++)
    {
      min=i;
      for(j=i+1;j<arrLen;j++){
        if(arr[j]<arr[i]){
          min=j;
          temp=arr[i];
          arr[i]=arr[min];
          arr[min]=temp;
        }
      }
    }
    return arr;
  }

// Function to test if the returned array contains prime numbers
function testGetPrimes() {
    const input = [2, 3, 4, 5, 6, 7, 8, 9, 10];
    const expectedOutput = [2, 3, 5, 7];
    const result = getPrimes(input);
    
    console.log("Test Case: getPrimes()");
    console.log("Input:", input);
    console.log("Expected Output:", expectedOutput);
    console.log("Actual Output:", result);
    console.log("Test Result:", JSON.stringify(result) === JSON.stringify(expectedOutput) ? "Pass" : "Fail");
    console.log("-----------------------------------------");
}

// Function to test if a string is palindrome or not
function testTestPalindrome() {
    const testCases = ["radar", "hello", "level", "noon"];
    
    console.log("Test Case: testPalindrome()");
    testCases.forEach(testCase => {
        const result = testPalindrome(testCase);
        console.log("Input:", testCase);
        console.log("Expected Output: Palindrome");
        console.log("Actual Output:", result);
        console.log("Test Result:", result === "Palindrome" ? "Pass" : "Fail");
        console.log("-----------------------------------------");
    });
}

// Function to test arrayReverse function
function testArrayReverse() {
    const input = [1, 2, 3, 4, 5];
    const expectedOutput = [5, 4, 3, 2, 1];
    const result = arrayReverse(input);
    
    console.log("Test Case: arrayReverse()");
    console.log("Input:", input);
    console.log("Expected Output:", expectedOutput);
    console.log("Actual Output:", result);
    console.log("Test Result:", JSON.stringify(result) === JSON.stringify(expectedOutput) ? "Pass" : "Fail");
    console.log("-----------------------------------------");
}

// Function to test the sorting of an array
function testSortArray() {
    const input = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
    const expectedOutput = [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9];
    const result = sortArray(input);
    
    console.log("Test Case: sortArray()");
    console.log("Input:", input);
    console.log("Expected Output:", expectedOutput);
    console.log("Actual Output:", result);
    console.log("Test Result:", JSON.stringify(result) === JSON.stringify(expectedOutput) ? "Pass" : "Fail");
    console.log("-----------------------------------------");
}

// Run all test cases
function runTests() {
    testGetPrimes();
    testTestPalindrome();
    testArrayReverse();
    testSortArray();
}

// Execute test cases
runTests();

//to run these tests just open terminal then write node main.js
