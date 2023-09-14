
<?php
$x = 10;
$y = 20;
if ($x > $y) {
    $message = 'x lớn hơn y';
} elseif ($x < $y) {
    $message = 'x nhỏ hơn y';
} else {
    $message = 'x bằng y';
}
echo $message;