import audio1 from '../data/track1.mp3'
import audio2 from '../data/track2.mp3'

import snoozeSZAThumbnail from '../data/snoozeSZAThumbnail.jpg'
import monacoBadBunnyThumbnail from '../data/monacoBadBunnyThumbnail.jpg'
import iRememberEverythingZachBryanThumbnail from '../data/iRememberEverythingZachBryanThumbnail.jpg'
import fastCarLukeCombsThumbnail from '../data/fastCarLukeCombsThumbnail.jpg'

export const songList = [
    {
        id: 0,
        title: "Snooze",
        artist: "SZA",
        genre: "R&B",
        thumbnail: snoozeSZAThumbnail,
        src: audio1
    },
    {
        id: 1,
        title: "Monaco",
        artist: "Bad Bunny",
        genre: "Latin",
        thumbnail: monacoBadBunnyThumbnail,
        src: audio2
    },
    {
        id: 2,
        title: "I remember Everything",
        artist: "Zach Bryan",
        genre: "Country",
        thumbnail: iRememberEverythingZachBryanThumbnail,
        src: audio1
    },
    {
        id: 3,
        title: "Fast Car",
        artist: "Luke Combs",
        genre: "Country",
        thumbnail: fastCarLukeCombsThumbnail,
        src: audio2
    }
]