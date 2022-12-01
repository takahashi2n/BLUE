bluetooth.onBluetoothConnected(function () {
    while (true) {
        let date = ""
        if (date == "A") {
            mbit_小車類.CarCtrlSpeed(mbit_小車類.CarState.Car_Run, 200)
        } else if (date == "B") {
            mbit_小車類.CarCtrlSpeed(mbit_小車類.CarState.Car_Back, 150)
        } else if (date == "C") {
            mbit_小車類.CarCtrlSpeed(mbit_小車類.CarState.Car_Left, 150)
        } else if (date == "D") {
            mbit_小車類.CarCtrlSpeed(mbit_小車類.CarState.Car_Right, 150)
        } else {
            mbit_小車類.CarCtrl(mbit_小車類.CarState.Car_Stop)
        }
    }
})
let a = huskylens.readBox_s(Content3.ID)
bluetooth.startUartService()
basic.forever(function () {
    huskylens.request()
    if (huskylens.isAppear_s(HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        if (a < 5) {
            basic.showNumber(a - 1)
        }
        if (a == 6) {
            mbit_小車類.RGB_Car_Big2(mbit_小車類.enColor.Red)
        } else if (a == 7) {
            mbit_小車類.RGB_Car_Big2(mbit_小車類.enColor.Green)
        } else if (a == 8) {
            mbit_小車類.RGB_Car_Big2(mbit_小車類.enColor.Blue)
        } else if (a == 9) {
            mbit_小車類.RGB_Car_Big2(mbit_小車類.enColor.White)
        }
    }
})
