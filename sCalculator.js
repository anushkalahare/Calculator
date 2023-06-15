 var screen = document.querySelector('#input');
    var btn = document.querySelectorAll('.button');

    
    for (item of btn) {
        item.addEventListener('click', (e) => {
            btntext = e.target.innerText;

            if (btntext == '×') {
                btntext = '*';
            }

            if (btntext == '÷') {
                btntext = '/';
            }
            screen.value += btntext;
        });
    }

    function sin() {
       screen.value = Math.sin(screen.value);
    }

    function cos() {
        screen.value = Math.cos(screen.value);
    }

    function tan() {
        screen.value = Math.tan(screen.value);
    }

    function asin() {
  	screen.value = Math.asin(screen.value);
    }

    function acos() {
      screen.value = Math.acos(screen.value);
    }

    function atan() {
      screen.value = Math.atan(screen.value);
    }

    function pow() {
        screen.value = Math.pow(screen.value, 2);
    }

    function sqrt() {
        screen.value = Math.sqrt(screen.value, 2);
    }

    function log() {
        screen.value = Math.log10(screen.value);
    }

		function ln() {
        screen.value = Math.log(screen.value);
    }

    function pi() {
        screen.value = 3.14159265359;
    }

    function e() {
        screen.value = 2.71828182846;
    }

    function fact() {
        var i, num, f;
        f = 1
        num = screen.value;
        for (i = 1; i <= num; i++) {
            f = f * i;
        }

        i = i - 1;

        screen.value = f;
    }

    function backspc() {
        screen.value = screen.value.substr(0, screen.value.length - 1);
    }

		function clear() {
        screen.value = "";
    }

		function percent() {
        screen.value = screen.value / 100;
    }

    function plusMinus() {
        if (screen.value.charAt(0) === "-") {
    screen.value = screen.value.slice(1);
    } else {
    screen.value = "-" + screen.value;
    }
    }


