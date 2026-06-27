const tracks = document.querySelectorAll(".track");

tracks.forEach(track => {

    track.addEventListener("click", () => {

        tracks.forEach(t => t.classList.remove("active"));

        track.classList.add("active");

    });

});



const cards = document.querySelectorAll(".concert-card");

cards.forEach(card => {

    card.addEventListener("click", () => {

        cards.forEach(c => c.classList.remove("active"));

        card.classList.add("active");

    });

});



const playBtn = document.querySelector(".play-btn i");

if (playBtn) {

    playBtn.addEventListener("click", () => {

        if (playBtn.classList.contains("bi-pause-fill")) {

            playBtn.classList.remove("bi-pause-fill");
            playBtn.classList.add("bi-play-fill");

        } else {

            playBtn.classList.remove("bi-play-fill");
            playBtn.classList.add("bi-pause-fill");

        }

    });

}



// conserts tickets

const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");

const title = document.getElementById("concertTitle");
const image = document.getElementById("concertImage");
const date = document.getElementById("concertDate");
const venue = document.getElementById("concertVenue");
const duration = document.getElementById("concertDuration");
const seats = document.getElementById("concertSeats");
const about = document.getElementById("concertAbout");
if (card1 && card2 && card3) {

    function removeActive() {
        card1.classList.remove("active");
        card2.classList.remove("active");
        card3.classList.remove("active");
    }

    card1.onclick = function () {

        removeActive();
        card1.classList.add("active");

        title.innerHTML = "ALEXANDRIA CONCERT";
        image.src = "assets/t1.png";

        date.innerHTML = `
        WEDNESDAY <br>
        <small>1 JULY 2026</small>
    `;

        venue.innerHTML = `
        GRAND <br>
        <small>CELEBRATION HALL</small>
    `;

        duration.innerHTML = "60 MIN";
        seats.innerHTML = "30";

        about.innerHTML =
            "An unforgettable evening of harmony and passion.";
    };

    card2.onclick = function () {

        removeActive();
        card2.classList.add("active");

        title.innerHTML = "EBDAA CONCERT";
        image.src = "assets/t2.png";

        date.innerHTML = `
        FRIDAY <br>
        <small>15 AUGUST 2026</small>
    `;

        venue.innerHTML = `
        CAIRO <br>
        <small>UNIVERSITY DOME</small>
    `;

        duration.innerHTML = "90 MIN";
        seats.innerHTML = "45";

        about.innerHTML =
            "A special concert featuring the choir's most famous performances.";
    };

    card3.onclick = function () {

        removeActive();
        card3.classList.add("active");

        title.innerHTML = "ALAMEIN CONCERT";
        image.src = "assets/t3.png";

        date.innerHTML = `
        SATURDAY <br>
        <small>24 SEPTEMBER 2026</small>
    `;

        venue.innerHTML = `
        U <br>
        <small>ARENA</small>
    `;

        duration.innerHTML = "75 MIN";
        seats.innerHTML = "50";

        about.innerHTML =
            "A musical night at Alamein Arena with the Benha University Choir.";
    };
}




// ===== Medley =====

const track1 = document.getElementById("track1");
const track2 = document.getElementById("track2");
const track3 = document.getElementById("track3");
const track4 = document.getElementById("track4");

const songImage = document.getElementById("songImage");
const songTitle = document.getElementById("songTitle");
const startTime = document.getElementById("startTime");
const endTime = document.getElementById("endTime");
const songAbout = document.getElementById("songAbout");

const song1 = document.getElementById("song1");
const song2 = document.getElementById("song2");
const song3 = document.getElementById("song3");
const song4 = document.getElementById("song4");
const song5 = document.getElementById("song5");
const song6 = document.getElementById("song6");

if (track1 && track2 && track3 && track4) {

    function removeTrackActive() {

        track1.classList.remove("active");
        track2.classList.remove("active");
        track3.classList.remove("active");
        track4.classList.remove("active");

    }

    track1.onclick = function () {

        removeTrackActive();
        track1.classList.add("active");

        songImage.src = "assets/t2.png";
        songTitle.innerHTML = '"ABYAD W ESWED"';
        startTime.innerHTML = "02:30";
        endTime.innerHTML = "11:42";

        songAbout.innerHTML =
            "<span>ABYAD W ESWED</span> is a tribute to egyptian drama ,bringing together theme songs and emotional performances that have remained in the hearts of audiences for years..";

        song1.innerHTML = '<i class="bi bi-music-note-beamed"></i> yatara';
        song2.innerHTML = '<i class="bi bi-music-note-beamed"></i> eshmaana ana';
        song3.innerHTML = '<i class="bi bi-music-note-beamed"></i> howa enty leh beeda keda';
        song4.innerHTML = '<i class="bi bi-music-note-beamed"></i> aadreen ya donya';
        song5.innerHTML = '<i class="bi bi-music-note-beamed"></i> yeeni aleiky ya teyba';
        song6.innerHTML = '<i class="bi bi-music-note-beamed"></i> mahadesh mertah';

    };

    track2.onclick = function () {

        removeTrackActive();
        track2.classList.add("active");

        songImage.src = "assets/t1.png";
        songTitle.innerHTML = '"MOWASHAHAT"';
        startTime.innerHTML = "02:30";
        endTime.innerHTML = "11:53";

        songAbout.innerHTML =
            "<span> MOWASHAHAT </span> elebrates yhe beauty of classical arabic music through a collection of timeless melodies and rich vocal harmonies.";

        song1.innerHTML = '<i class="bi bi-music-note-beamed"></i> aman aman';
        song2.innerHTML = '<i class="bi bi-music-note-beamed"></i> lama bada yatathana';
        song3.innerHTML = '<i "></i>';
        song4.innerHTML = '<i "></i>';
        song5.innerHTML = '<i class="bi bi-music-note-beamed"></i> ah ya lalaly';
        song6.innerHTML = '<i class="bi bi-music-note-beamed"></i> agban l ghazal qetal agban';

    };

    track3.onclick = function () {

        removeTrackActive();
        track3.classList.add("active");

        songImage.src = "assets/t3.png";
        songTitle.innerHTML = '"EBDAA"';
        startTime.innerHTML = "02:30";
        endTime.innerHTML = "08:09";

        songAbout.innerHTML =
            "<span>EBDAA</span> is a celebration of music and creativity, reflecting the artistic spirit of the lbdaa fastival through powerful performances.";


        song1.innerHTML = '<i class="bi bi-music-note-beamed"></i> khaled folazy';
        song2.innerHTML = '<i class="bi bi-music-note-beamed"></i> alii sotak';
        song3.innerHTML = '<i "></i> ';
        song4.innerHTML = '<i "></i> ';
        song5.innerHTML = '<i class="bi bi-music-note-beamed"></i> yala yala';
        song6.innerHTML = '<i class="bi bi-music-note-beamed"></i> elahlam momken tthaaa';

    };
    track4.onclick = function () {

        removeTrackActive();
        track4.classList.add("active");

        songImage.src = "assets/t2.png";
        songTitle.innerHTML = '"RESALET WATAN"';
        startTime.innerHTML = "02:30";
        endTime.innerHTML = "15:46";

        songAbout.innerHTML =
            "<span>RESALET WATAN</span> is a patriotic musical performance that celebrates national pride, unity and belonging through powerful melodies and inspiring choral harmonies.";

        song1.innerHTML = '<i class="bi bi-music-note-beamed"></i> ya habibty ya masr';
        song2.innerHTML = '<i class="bi bi-music-note-beamed"></i> tslm elayady';
        song3.innerHTML = '<i class="bi bi-music-note-beamed"></i> ebn elshaheed';
        song4.innerHTML = '<i class="bi bi-music-note-beamed"></i> saaba elhayah w elhl baseet';
        song5.innerHTML = '<i class="bi bi-music-note-beamed"></i> tahya masr tahya';
        song6.innerHTML = '<i class="bi bi-music-note-beamed"></i> wagaa elforaaa';

    };

    track5.onclick = function () {

        removeTrackActive();
        track5.classList.add("active");

        songImage.src = "assets/t1.png";
        songTitle.innerHTML = '"ALA ARD WAHDA"';
        startTime.innerHTML = "02:30";
        endTime.innerHTML = "03:42";

        songAbout.innerHTML =
            "<span>ALA ARD WAHDA</span> is a musical journey celebrating unity , belonging and the shared spirit that brings egyptians together.";

        song1.innerHTML = '<i class="bi bi-music-note-beamed"></i> el takberaat';
        song2.innerHTML = '<i class="bi bi-music-note-beamed"></i> azema ya masr';
        song3.innerHTML = '<i class="bi bi-music-note-beamed"></i> waat elhesab';
        song4.innerHTML = '<i class="bi bi-music-note-beamed"></i> slam';
        song5.innerHTML = '<i class="bi bi-music-note-beamed"></i> ebn elshaheed';
        song6.innerHTML = '<i class="bi bi-music-note-beamed"></i> ehna msh betoaa hedad';

    };

}

