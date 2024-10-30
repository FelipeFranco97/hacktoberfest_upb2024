let mp3 = "https://res.cloudinary.com/dpwnji5mr/video/upload/v1730250127/9-mercury-halloween-villain-bgm-254418_nc5jak.mp3";

window.onload = ()=>{
    sonido = new Howl({
        src: [mp3],
        volume:.2,
        loop: true,
        stereo:0
    });
    sonido.play();
}