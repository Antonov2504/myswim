var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: 'GfPs10cdHCo',
        playerVars: {
            autoplay: 1,
            playlist: 'GfPs10cdHCo',
            loop: 1,
            controls: 0,
            showinfo: 0,
            autohide: 1,
            disablekb: 1,
            modestbranding: 1,
            vq: 'hd1080'
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
    player.mute();
}