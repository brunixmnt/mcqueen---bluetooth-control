bluetooth.onBluetoothConnected(function () {
    basic.showString("C")
    connected = true
})
bluetooth.onBluetoothDisconnected(function () {
    _start = false
    connected = false
    basic.showString("D")
})
function robotRun222 () {
    runTime1 = input.runningTime()
    stopTime1 = input.runningTime()
    delta = 0
    delta2 = 0
    while (_start) {
        if (maqueen.sensor(PingUnit.Centimeters) < 20 && maqueen.sensor(PingUnit.Centimeters) != 0) {
            basic.showIcon(IconNames.No)
            maqueen.motorStopAll()
            basic.pause(500)
            maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CCW, 60)
maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CCW, 60)
basic.pause(500)
            maqueen.motorStopAll()
            basic.pause(200)
            item = Math.randomBoolean()
            if (item == true) {
                maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 60)
maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 0)
basic.pause(400)
                maqueen.motorStopAll()
                basic.pause(200)
            }
            if (item == false) {
                maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 0)
maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 60)
basic.pause(400)
                maqueen.motorStopAll()
                basic.pause(200)
            }
        } else {
            basic.showIcon(IconNames.Yes)
            maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 60)
maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 60)
runTime2 = input.runningTime()
            stopTime2 = input.runningTime()
            delta = runTime2 - runTime1
            delta2 = stopTime2 - stopTime1
            if (delta >= 15000) {
                basic.showIcon(IconNames.Skull)
                maqueen.motorStopAll()
                basic.pause(2000)
                maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CCW, 50)
maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CCW, 50)
runTime1 = runTime2
                delta = 0
                basic.pause(500)
            }
            if (delta2 >= 60000) {
                basic.showIcon(IconNames.Target)
                stopTime1 = stopTime2
                delta2 = 0
                _start = false
            }
        }
    }
    basic.showLeds(`
        . # # # .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    maqueen.motorStopAll()
}
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_A_DOWN) {
        _start = true
    }
    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_A_UP) {
        _start = false
    }
})
let stopTime2 = 0
let runTime2 = 0
let item = false
let delta2 = 0
let delta = 0
let stopTime1 = 0
let runTime1 = 0
let connected = false
let _start = false
_start = false
connected = false
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    robotRun222()
    basic.pause(100)
})
