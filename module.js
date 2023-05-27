var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    setInterval(function () {
        var dt = new Date();
        res.write("<script>document.body.innerHTML = '';</script>"); // Xóa dòng đã nhập trước đó
        res.write("The date and time are currently: " + dt);
    }, 1000); // Cập nhật mỗi giây (1000 milliseconds)

}).listen(8080);