let nam = +prompt("Nhập vào  năm cần xét: ");
if (nam % 100 == 0) {
    if (nam % 400 == 0) {
        alert("Nam " + nam + " la nam nhuan.");
    } else {
        alert("Nam " + nam + " khong phai la nam nhuan.");
    }
} else if (nam % 100 != 0) {
    if (nam % 4 == 0) {
        alert("Nam " + nam + " la nam nhuan.");
    } else {
        alert("Nam " + nam + " khong phai la nam nhuan.");
    }
}