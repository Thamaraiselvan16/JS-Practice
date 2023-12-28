function isPalindrome(text) {
    // Remove spaces and convert to lowercase for case-insensitive comparison
    const cleanedText = text.replace(/\s/g, '').toLowerCase();
    const reversedText = cleanedText.split('').reverse().join('');
    return cleanedText === reversedText;
}

function check() {
    const text = document.getElementById("input").value;
    let text2 = "";

    if (text.trim() === "") {
        text2 = "Please enter a word";
    } else if (isPalindrome(text)) {
        text2 = "Yes, this is a palindrome";
    } else {
        text2 = "No, this is not a palindrome";
    }

    let result = document.querySelector("#result");
    result.innerHTML = text2;
}