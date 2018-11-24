 window.onscroll = function () {
        console.log(window.pageYOffset);
        var header = document.getElementById('header');
        var wrapper = document.getElementById('wrapper');
        if (window.pageYOffset > 500) {
            header.classList.add("header-top")
            header.classList.remove("header")
            wrapper.classList.add("wrapper-top");
            wrapper.classList.remove("wrapper");
            
        } else {
            header.classList.remove("header-top")
            header.classList.add("header")
            wrapper.classList.remove("wrapper-top");
            wrapper.classList.add("wrapper");
        }
    }