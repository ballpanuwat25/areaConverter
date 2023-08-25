function swapUnits() {
    var unitFrom = document.getElementById("unitFrom").value;
    var unitTo = document.getElementById("unitTo").value;

    document.getElementById("unitFrom").value = unitTo;
    document.getElementById("unitTo").value = unitFrom;
}

function convertArea(value, unitFrom, unitTo) {
    if (unitFrom === unitTo) {
        return value;
    }

    if (unitFrom === "ไร่") {
        if (unitTo === "งาน") {
            return value * 4;
        } else if (unitTo === "ตารางวา") {
            return value * 400;
        } else if (unitTo === "ตารางเมตร") {
            return value * 1600;
        }
    } else if (unitFrom === "งาน") {
        if (unitTo === "ไร่") {
            return value / 4;
        } else if (unitTo === "ตารางวา") {
            return value * 100;
        } else if (unitTo === "ตารางเมตร") {
            return value * 400;
        }
    } else if (unitFrom === "ตารางวา") {
        if (unitTo === "ไร่") {
            return value / 400;
        } else if (unitTo === "งาน") {
            return value / 100;
        } else if (unitTo === "ตารางเมตร") {
            return value * 4;
        }
    } else if (unitFrom === "ตารางเมตร") {
        if (unitTo === "ไร่") {
            return value / 1600;
        } else if (unitTo === "งาน") {
            return value / 400;
        } else if (unitTo === "ตารางวา") {
            return value / 4;
        }
    }
}

function displayResult() {
    var value = parseFloat(document.getElementById("inputNumber").value);
    var unitFrom = document.getElementById("unitFrom").value;
    var unitTo = document.getElementById("unitTo").value;

    var totalValue = convertArea(value, unitFrom, unitTo);

    if(value != Number(value)){
        document.getElementById("result").innerHTML = "กรุณากรอกตัวเลข";
    } else {
        document.getElementById("result").innerHTML = value + " " + unitFrom + " มีค่าเท่ากับ " + totalValue + " " + unitTo;
    }
}