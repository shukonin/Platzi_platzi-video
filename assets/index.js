import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.js'

const video = document.querySelector('video')
const player = new MediaPlayer({
    el: video,
    plugins: [
        new AutoPlay(),
        new AutoPause()
    ]
})

const play_btn = document.getElementById('play_btn')
play_btn.onclick = () => player.togglePlay()

const mute_btn = document.getElementById('mute_btn')
mute_btn.onclick = () => player.toggleMute()

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message)
    })
}