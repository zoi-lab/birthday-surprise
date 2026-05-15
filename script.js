function startExperience() {
    const landing = document.getElementById('landing-page');
    const videoCont = document.getElementById('video-container');
    const video = document.getElementById('bdayVideo');

    // Landing page ko hide krna
    landing.style.opacity = '0';
    
    setTimeout(() => {
        landing.classList.add('hidden');
        videoCont.classList.remove('hidden');
        
        // Video play krna
        video.play();
        
        // Auto full screen (Optional)
        if (video.requestFullscreen) {
            video.requestFullscreen();
        }
    }, 500);
}