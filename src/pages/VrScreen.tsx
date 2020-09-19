import React from 'react'

function VrScreen() {
    return (
        <video id="saVideoPlayer" className="video-js  vjs-big-play-centered" controls muted data-setup="{}" poster="assets/icons/png/image.png">
  <source src="Django Ecommerce Website  Guest User Cart  Part 4.mp4" type="video/mp4" />
  <p className="vjs-no-js">
    To view this video please enable JavaScript, and consider upgrading to a
    web browser that
    <a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
  </p>
</video>

    )
}

export default VrScreen
