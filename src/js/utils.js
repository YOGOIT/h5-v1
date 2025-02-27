export default {
    getToken() {
        return window.localStorage.getItem('token');
    },
    saveToken(token) {
        window.localStorage.setItem('token', token);
    },
    clearToken() {
        window.localStorage.removeItem('token');
    },
    isMobile() {
        let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
        return flag;
    },
    getHMS(time) {
        const hour =
            parseInt(time / 3600) < 10 ?
            "0" + parseInt(time / 3600) :
            parseInt(time / 3600);
        const min =
            parseInt((time % 3600) / 60) < 10 ?
            "0" + parseInt((time % 3600) / 60) :
            parseInt((time % 3600) / 60);
        const sec =
            parseInt((time % 3600) % 60) < 10 ?
            "0" + parseInt((time % 3600) % 60) :
            parseInt((time % 3600) % 60);
        return hour + ":" + min + ":" + sec;
    },
    copyright() {
        let outs = [];
        let fi = function () {
            return {
                msg: "",
                style: ""
            }
        };

        var oi = fi();
        oi.msg = "MeEdu - 在线教育培训解决方案";
        oi.style = "padding-top: 15px;padding-bottom:15px;line-height:30px;font-size:2rem;color:#3ca7fa";
        outs.push(oi);

        oi = fi();
        oi.msg = "\r\n官网：\nhttps://meedu.vip\r\n\r\nGitHub：\nhttps://github.com/qsnh/meedu\r\n\r\n使用手册：\nhttps://www.yuque.com/meedu/fvvkbf\r\n\r\n当前版本：v4.5.1\r\n";
        outs.push(oi);

        outs.map(function (x) {
            console.log("%c" + x.msg, x.style);
        });
    }
}