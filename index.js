let lerpSpeed = 1;

let r = 255;
let g = 0;
let b = 0;

let incr = false;
let incg = true;
let incb = false;

function init() {
    lerpRainbow();
}

function lerpRainbow() {
    setInterval(() => {
        if(incr) {
            r++;
            b--;
        }

        if(incg) {
            g++;
            r--;
        }

        if(incb) {
            b++;
            g--;
        }

        if(r == 255) {
            incr = false;
            incg = true;
            incb = false;
        }

        if(g == 255) {
            incr = false;
            incg = false;
            incb = true;
        }

        if(b == 255) {
            incr = true;
            incg = false;
            incb = false;
        }

        document.body.style.backgroundColor = "rgb(" + (r + 50) + "," + (g + 50) + "," + (b + 50) + ")";
        console.log("Updated: " + r + "," + g + "," + b);
    }, lerpSpeed);

}

window.onload = init;