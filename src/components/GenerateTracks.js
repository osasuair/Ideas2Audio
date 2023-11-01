import { voices } from '../data/voices.js'
import { songList } from '../data/songs.js'
import track1 from '../data/track1.mp3'

/**
 * Generates an array of dummy tracks based on the given voice ID, song IDs, and edits.
 * @param {string} voiceId - The ID of the voice to use for the covers.
 * @param {string[]} songs - An array of song IDs to use for the covers.
 * @param {string[]} edits - An array of edit IDs to use for the covers.
 * @returns {Object[]|undefined} An array of track objects or undefined if no tracks could be generated.
 */
const generateDummyTracks = (voiceId, songs, edits) => {
    var voice = voices.find((voice) => voice.id === voiceId)
    var results = songs.map((songId, index) => {
        var song = songList.find((song) => song.id === songId)
        return {
            id: index,
            title: song.title + " (Cover by " + voice.name + ")",
            artist: voice.name + " ft. " + song.artist,
            genre: "Cover",
            src: track1,
            thumbnail: song.thumbnail,
            profile: voice.profile,
        }
    })
    if (results.length === 0) return undefined
    return results
}

export const generate = (voice, songs, edits) => {
    return generateDummyTracks(voice, songs, edits)
}