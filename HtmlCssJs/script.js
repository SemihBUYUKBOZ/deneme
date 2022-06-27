var kat = document.getElementById("drop-btn");
        var drop = document.getElementById("drop");
        var as = document.getElementById("as");
        var yuk = document.getElementById("yuk");
        function olay() {
            if (drop.style.visibility == 'hidden') {
                drop.style.visibility = 'visible';
                drop.style.transition = 'all 0.2s linear';
                as.style.display = 'none';
                yuk.style.display = 'inline-block';
                kat.style.color = "darkorange";

            }
            else {
                drop.style.visibility = 'hidden';
                as.style.display = 'inline-block';
                yuk.style.display = 'none';
                kat.style.color = "black";
                drop.style.transition = 'all 0.2s linear';
            }
        }
        function olay_over() {
            kat.style.color = "darkorange";
        }
        function olay_out() {
            kat.style.color = "black";
        }
        kat.addEventListener("click", olay);
        kat.addEventListener("mouseover", olay_over);
        if (drop.style.visibility == "visible") {
            kat.style.color = "darkorange";
        }
        kat.addEventListener("mouseout", olay_out);
        var setting = document.getElementById("setting");
        function rotate() {
            setting.style.transform = "rotate(45deg)";
            setting.style.webkitTransform = "rotate(45deg)";
        }
        function rotate_out() {
            setting.style.transform = "rotate(-45deg)";
            setting.style.webkitTransform = "rotate(-45deg)";
        }

        setting.addEventListener("mouseover", rotate);
        setting.addEventListener("mouseout", rotate_out);

        var closeerror = document.getElementsByClassName("close-ico-error");
        var closesucces = document.getElementsByClassName("close-ico-succes");
        var closeinfo = document.getElementsByClassName("close-ico-info");
        var closewarning = document.getElementsByClassName("close-ico-warning");
        var i;
        var showerror = document.getElementById("error-btn");
        var showsucces = document.getElementById("succes-btn");
        var showinfo = document.getElementById("info-btn");
        var showwarning = document.getElementById("warning-btn");
        let alerterror = document.getElementById("alert-error");
        let alertsucces = document.getElementById("alert-succes");
        let alertinfo = document.getElementById("alert-info");
        let alertwarning = document.getElementById("alert-warning");
        function alert_show_error() {
            if (alerterror.getElementsByClassName('hidden')) {
                alerterror.classList.add('visible');
            }
        }
        showerror.addEventListener("click", alert_show_error);

        for (i = 0; i < closeerror.length; i++) {
            closeerror[i].onclick = function () {
                setTimeout(function () { alerterror.classList.remove('visible'); }, 100);
            }
        }
        function alert_show_succes() {
            if (alertsucces.getElementsByClassName('hidden')) {
                alertsucces.classList.add('visible');
            }
        }
        showsucces.addEventListener("click", alert_show_succes);

        for (i = 0; i < closesucces.length; i++) {
            closesucces[i].onclick = function () {
                setTimeout(function () { alertsucces.classList.remove('visible'); }, 100);
            }
        }
        function alert_show_info() {
            if (alertinfo.getElementsByClassName('hidden')) {
                alertinfo.classList.add('visible');
            }
        }
        showinfo.addEventListener("click", alert_show_info);

        for (i = 0; i < closeinfo.length; i++) {
            closeinfo[i].onclick = function () {
                setTimeout(function () { alertinfo.classList.remove('visible'); }, 100);
            }
        }
        function alert_show_warning() {
            if (alertwarning.getElementsByClassName('hidden')) {
                alertwarning.classList.add('visible');
            }
        }
        showwarning.addEventListener("click", alert_show_warning);

        for (i = 0; i < closewarning.length; i++) {
            closewarning[i].onclick = function () {
                setTimeout(function () { alertwarning.classList.remove('visible'); }, 100);
            }
        }


        let animasyon_btn=document.getElementById("an-btn");
        let an_body=document.getElementById("body");
        function anm() {
            if(an_body.getElementsByClassName("")){
                an_body.classList.add('body-animasyon');
            }
        }
        animasyon_btn.addEventListener("click",anm);