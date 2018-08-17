function Go() {
    console.log("Go");
}

function GoSteps(n) {
    if (typeof (n) === "number" && Number.isNaN(n) === false) {
        if (n < 0 || n === "") {
            console.log("0 次");
        }
        let times = Math.floor(n);
        console.log(times);
        while (times > 0) {
            Go();
            times--;
        }
    } else if (typeof (n) === "boolean") {
        if (n) {
            Go();
        }
        console.log("0");
    } else if (Number.isNaN(n)) {
        console.log("0次");
    } else {
        console.log("0 次");
    }

}
GoSteps(NaN); // Go 10次