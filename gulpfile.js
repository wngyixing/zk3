var gulp = require('gulp'),
    toolurl = require('url'),
    webserver = require('gulp-webserver');
gulp.task('default', function() {
    gulp.src('.').pipe(webserver({
        host: 'localhost',
        port: 9999,
        middleware: function(req, res, next) {
            var objurl = toolurl.parse(req.url, true);
            if (objurl.pathname === "/getdata") {
                var data = [{
                    "img": "./stutic/img/ban/1.png"
                }, { "img": "./stutic/img/ban/2.png" }];
                res.end(JSON.stringify(data))

            } else {
                next()
            }
        }
    }))
})