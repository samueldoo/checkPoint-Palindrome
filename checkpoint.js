function isPalindrome(word) {
if (word.length <= 1) {
    return true; // Base case: an empty word or a word with a single character is a palindrome
} else if (word[0] === word[word.length - 1]) {
    // Characters at the ends of the word are equal
    // Recursively check the rest of the word without the first and last characters
    return isPalindrome(word.slice(1, word.length - 1));
} else {
    return false; // Characters at the ends of the word are different
}
}
console.log(isPalindrome("radar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
console.log(isPalindrome("level")); // Output: true

