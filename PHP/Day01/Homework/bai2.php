<!DOCTYPE html>
<html lang="en">
<head>
    <title>Kiểm tra điểm số</title>
</head>
   <body>
   <h1>Kiểm tra điểm số</h1>
       <?php
       function checkScore($num){
           if ($num >= 90){
               echo "A";
           } elseif ($num >= 80 && $num < 89){
               echo "B";
           } elseif ($num >= 70 && $num < 79){
               echo "C";
           } elseif ($num >= 60 && $num <69){
               echo "D";
           } else{
               echo "F";
           }
       }
       $score = 75;
       checkScore($score);
       ?>
</body>
</html>