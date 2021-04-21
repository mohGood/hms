function show_time_without_reload() {
    let unix_timestamp = new Date().getTime() / 1000;
    var date = new Date(unix_timestamp * 1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    document.getElementById("time").innerHTML = formattedTime;

    setTimeout(show_time_without_reload, 1000);
}