let number = 0
let timer = 0
// As a reward for brushing teeth correctly, the user can ask the magic 8 ball a question. When the micro:bit is shook it will generate a random number between 1-3. If a 1 is generated it will show a check mark = yes, a 2 would show an X = no, and a 3 would generate a "meh" emoji.
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    number = randint(1, 3)
    if (number == 1) {
        basic.showIcon(IconNames.Yes)
    } else if (number == 2) {
        basic.showIcon(IconNames.No)
    } else {
        basic.showIcon(IconNames.Asleep)
    }
})
// When the logo is touched the user should see a message to get ready to brush their teeth and then here a melody alerting them to begin to brush. The timer will also set to 0.
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("Get ready to brush...")
    music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
    timer = 0
})
// The micro:bit will count time and every 30 second interval it will show the happy face and play a melody alerting the user that it is time to move to the next quadrant of their moth and begin brushing. After 120 seconds has passed, the user will hear the melody to alert them to stop brushing and will see a string of letters spelling out "Great job!"
basic.forever(function () {
    basic.pause(1000)
    timer += 1
    if (timer == 30) {
        basic.showIcon(IconNames.Happy)
        music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Once)
    }
    if (timer == 60) {
        basic.showIcon(IconNames.Happy)
        music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Once)
    }
    if (timer == 90) {
        basic.showIcon(IconNames.Happy)
        music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Once)
    }
    if (timer == 120) {
        basic.showIcon(IconNames.Happy)
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
        basic.showString("Great job!")
    }
})
