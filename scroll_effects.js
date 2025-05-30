<script>
    const videos = document.querySelectorAll(".scroll-video");
    videos.forEach(video =>{
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (video.paused && video.currentTime === 0) {
                    video.play();
                }
            }
        });
    }, {
        thheshold: 0.5
    });
    observer.observe(video);
});

    const wipeImage = document.querySelector(".wipe-up");

    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                wipeImage.classList.add("animate");
            }
        });
    }, {
        threshold: 0.9
    });
    imageObserver.observe(wipeImage);

</script>