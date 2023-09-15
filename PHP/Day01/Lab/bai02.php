<!DOCTYPE html>
<html>
<head>
    <title>PHP If-ElseIf Exercise</title>
</head>
<body>
    <h1>Tính điểm</h1>
    <?php
    $score = 85;
    // TODO: Tính điểm của học sinh dựa vào $score.
    // Scores>90 là A, 80-89: B, 70-79: C, 60-69: D, dưới 60: F.
    if ($score >= 90){
        echo "A";
    } elseif ($score >= 80 && $score < 89){
        echo "B";
    } elseif ($score >= 70 && $score < 79){
        echo "C";
    } elseif ($score >= 60 && $score <69){
        echo "D";
    } else{
        echo "F";
    }
    ?>
    <p>Điểm của bạn là: <?php echo $score; ?> và đạt mức [ghi kết quả ra đây]</p>
</body>
</html>