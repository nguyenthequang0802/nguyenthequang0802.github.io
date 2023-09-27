<?php
    $birthday = "1990-05-15";
    $now = time();
    $age = date("Y-m-d",$now) - date("Y-m-d", $birthday);
    echo "Tuổi của bạn là: ". $age;