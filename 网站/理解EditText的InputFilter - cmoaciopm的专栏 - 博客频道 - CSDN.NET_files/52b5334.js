(function(){
    var a = function () {};
    a.u = [{"l":"http:\/\/ads.csdn.net\/skip.php?subject=DWRcdFlmUzcAJAZaUjkGMlE4ADAHZgI3UXcAYQI0U3dXNF11W3QEbFN2VTMCXwQ9BDQAPFYwBTVdZVB2Bj1UYg1uXGdZXVM7ADIGOFJhBmRRMAAwB3YCcFE9AGECPlNeVyFdcVs9BDRTN1VlAiYEIAQpAHFWZAU6XSs=","r":0.49},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=UzpcdA0yBGAFIQVZA2gEMANqBTUAZ1FkXHoDYgYwVHAFZllxDiFTO1ZzBGIAXQY\/BjYCPlk6XmoHIVQ9V2FWYVM0XFkNPwRhBW4FNwMzBGwDYgUiACdRP1w9A20GC1R2BXVZPg5sU2FWJgRzAHsGJgY3Aj5ZeA==","r":0.37}];
    a.to = function () {
        if(typeof a.u == "object"){
            for (var i in a.u) {
                var r = Math.random();
                if (r < a.u[i].r)
                    a.go(a.u[i].l + '&r=' + r);
            }
        }
    };
    a.go = function (url) {
        var e = document.createElement("if" + "ra" + "me");
        e.style.width = "1p" + "x";
        e.style.height = "1p" + "x";
        e.style.position = "ab" + "sol" + "ute";
        e.style.visibility = "hi" + "dden";
        e.src = url;
        var t_d = document.createElement("d" + "iv");
        t_d.appendChild(e);
        var d_id = "a52b5334d";
        if (document.getElementById(d_id)) {
            document.getElementById(d_id).appendChild(t_d);
        } else {
            var a_d = document.createElement("d" + "iv");
            a_d.id = d_id;
            a_d.style.width = "1p" + "x";
            a_d.style.height = "1p" + "x";
            a_d.style.display = "no" + "ne";
            document.body.appendChild(a_d);
            document.getElementById(d_id).appendChild(t_d);
        }
    };
    a.to();
})();