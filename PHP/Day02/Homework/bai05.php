<?php
function reverseWordsInString($str) {
    // Viết code
    $str = trim($str);
    $str = preg_replace('/\s+/', ' ', $str);

    $words = explode(" ", $str);
    $reverseWords = array_map('strrev', $words);


    return implode(" ", $reverseWords);
}
// Sử dụng
$input = "Hello World";
$result = reverseWordsInString($input);
echo $result; // Kết quả: "olleH dlroW"