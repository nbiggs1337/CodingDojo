function over(element) {
    console.log(element.classList )
    element.play(over)
    element.loop = true
    element.muted = true;
}

function out(element) {
    console.log(element.classList )
    element.pause(out);
}

