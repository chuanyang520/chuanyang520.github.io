!function(e) {
    var n, t = {}, o = "jinrishici-token";
    function i() {
        return document.getElementById("jinrishici-sentence") || 0 != document.getElementsByClassName("jinrishici-sentence").length
    }
    function c() {
        t.load(function(e) {
            var n = document.getElementById("jinrishici-sentence")
              , t = document.getElementsByClassName("jinrishici-sentence");
            if (n && (n.innerText = e.data.content),
            0 !== t.length)
                for (var o = 0; o < t.length; o++)
                    t[o].innerText = e.data.content
        })
    }
    function r(e, n) {
        var t = new XMLHttpRequest;
        t.open("get", n),
        t.withCredentials = !0,
        t.send(),
        t.onreadystatechange = function(n) {
            if (4 === t.readyState) {
                var o = JSON.parse(t.responseText);
                "success" === o.status ? e(o) : console.error("今日诗词API加载失败，错误原因：" + o.errMessage)
            }
        }
    }
    t.load = function(n) {
        return e.localStorage && e.localStorage.getItem(o) ? function(e, n) {
            return r(e, "http://api.tianapi.com/tiangou/index?key=210b91378c8a5b760c728cac25b547c1")
        }(n, e.localStorage.getItem(o)) : function(n) {
            return r(function(t) {
                e.localStorage.setItem(o, t.token),
                n(t)
            }, "http://api.tianapi.com/tiangou/index?key=210b91378c8a5b760c728cac25b547c1")
        }(n)
    }
    ,
    e.jinrishici = t,
    i() ? c() : (n = function() {
        i() && c()
    }
    ,
    "loading" != document.readyState ? n() : document.addEventListener ? document.addEventListener("DOMContentLoaded", n) : document.attachEvent("onreadystatechange", function() {
        "complete" == document.readyState && n()
    }))
}(window);
