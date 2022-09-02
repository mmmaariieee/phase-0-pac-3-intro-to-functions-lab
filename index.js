function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase())
}

function sayHiToHeadphonedRoommate(string) {
    let allLowerCase = "I can't hear you!"
    let allUpperCase = "YES INDEED!"
    let phrase = "I would love to!"

    if (string.toLowerCase(string) === string) {
        return allLowerCase
    }
    else if (string.toUpperCase(string) === string) {
        return allUpperCase
    }
    else if ("Let's have dinner together!" === string) {
        return phrase
    }
}