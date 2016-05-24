function setTimeoutThreeSeconds() {
    setTimeout(function () {
        console.log('finished setTimeout function');
    }, 3000);
}

function whileThreeSeconds() {
    var future = 3000 + new Date().getTime();
    while (new Date() < future) {}
    console.log('finished while function')
}

function clickHandler() {
    console.log('click!');
}

document.addEventListener('click', clickHandler);

whileThreeSeconds();
setTimeoutThreeSeconds();
console.log('finished global');