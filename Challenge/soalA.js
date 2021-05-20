convertInt(10000);

function convertInt(seconds) {
    var hour = Math.floor(seconds / 3600);
    var minutes = Math.floor(seconds % 3600 / 60);
    seconds %= 60;

    console.log(hour + " jam " + minutes + " menit " + seconds + " detik.")

}