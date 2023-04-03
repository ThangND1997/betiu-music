
var listTopSong = document.querySelector('.topMusic_item--song');
var checkKey = document.getElementById('allPage');
var song = document.getElementById('songFile');
var playBtn = document.getElementById('pause');
var topMusicTitle = document.querySelector('.topMusic-title')
var songBar = document.getElementById('songBar');
var recentSong = document.querySelector('.recentPlayed');
var topSongThumb = document.querySelector('.topMusic_item--img--thumb');
var playThumb = document.querySelector('.playerBar_item-img--thumb');
var miniTitle = document.querySelector('.playerBar_item-name--nameSong');
var miniArtist = document.querySelector('.playerBar_item-name--nameArtist');
var recentPlayedTitle = document.querySelector('.recentPlayed_title');
var recentPlayedItem;
var listArtistItem = document.querySelectorAll('.listArtist_item');
var listArtistitemIconRunning = document.querySelectorAll('.listArtist_item-iconRunning');
var curtime = document.querySelector('.currTime');
var durtime = document.querySelector('.durrTime');
var backWard = document.querySelector('.back');
var forWard = document.querySelector('.next');
let repeat = document.querySelector('.replay');
let volRange = document.getElementById('volRange');
let volIcon = document.querySelector('.playerBar_item-vol--icon');
let anotherSong = document.querySelector('.anotherSong');
let mobile = false
let iconRandom = document.querySelector('.random');
let logImg = document.querySelector(".log-img")
let logName = document.querySelector(".log-name")
let isOnlineSong = false
const loading = document.querySelector('#loading')
const btnEditProfile = document.querySelector('.edit-profile');
const modalProfile = document.querySelector('#edit-modal');
const loadingImg = document.querySelector('.loading-img')
const top100 = document.querySelector(".drop-top-100-list")
const topTrending = document.querySelector(".drop-top-trending-list")

const btnCloseProfile = document.querySelector('.edit-profile-btn-close');
const btnSaveProfile = document.querySelector('.edit-profile-btn-save');
const modalEditProfile = document.querySelector('.edit-modal-profile');
if ( screen.width < 740) mobile = true;
setInterval(autoNextTopSong,3000);
setInterval(displayTimer, 500);
//setInterval(renderTopSong, 500);


function start () {
    const isSuccess = localStorage.getItem("token");
    const userId = localStorage.getItem("id");
    if(isSuccess === "undefined" || isSuccess == null) {
        window.location.href = './index.html'
    }
    var obj = {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${isSuccess}`
        }
      }
    fetch(`https://service-betiu.onrender.com/api/v1/read/${userId}`, obj)
    .then(res => res.json())
    .then(result => {
        logImg.src = result.avatar;
        imgUploadAvatar.src = result.avatar;
        profileNameContent.value = `${result.firstName} ${result.lastName}`;
        profilePhoneContent.value = result.phone || "";
        logName.textContent = `Hello, ${result.firstName} ${result.lastName}`;
    })
}

const doc = document.querySelector('.log-out')
doc.addEventListener('click', button)
function button () {
    localStorage.clear()
    start()
}

start()

let numberOfArtist = 5;
var isPlaying = true;
var topSongIndex = 0;
var isTopSongPlaying = true;
var topSong = [
    {
        time: "5:10",
        nameSong: "See You Again",
        nameArtist: "just for mine",
        nameFile: "another/see you again.mp3",
        img:
          "another/01_See_You_Again__spanish_vers.jpg"
      }
      ,
      {
        time: "5:10",
        nameSong: "Monsters",
        nameArtist: "Katie Sky",
        nameFile: "another/Monsters - Katie Sky (Lyrics + Vietsub) ♫.mp3",
        img:
          "another/monsterCry.jpg"
      }
      ,
      {
        time: "5:10",
        nameSong: "At My Worst",
        nameArtist: "Pink Sweat$",
        nameFile: "another/Pink Sweat$ - At My Worst (Lyrics).mp3",
        img:
          "another/atmyWorst.jpg"
      }
      ,
      {
        time: "5:10",
        nameSong: "Everytime we touch",
        nameArtist: "Cascada, TiuuBui",
        nameFile: "another/Everytime we touch - Cascada.mp3",
        img:
          "another/everytimeWithTouch.jpg"
      }
      ,
      {
        time: "5:10",
        nameSong: "Forever",
        nameArtist: "Leo Messi",
        nameFile: "another/Forever.mp3",
        img:
          "another/forever.jpg"
      }
      ,
      {
        time: "5:10",
        nameSong: "Proud Of You",
        nameArtist: "ThangNguyen",
        nameFile: "another/Proud Of You.mp3",
        img: "another/chbi.jpg"
      }
      ,
      {
        time: "5:10",
        nameSong: "I NEED YOUR LOVE",
        nameArtist: "busquest",
        nameFile: "another/I NEED YOUR LOVE.mp3",
        img:
          "another/ineedYourLove.jpg"
      }
      ,
      {
        time: "5:10",
        nameSong: "Love Paradise",
        nameArtist: "Kelly Chen",
        nameFile: "another/Love Paradise - Kelly Chen [Lyrics].mp3",
        img:
          "another/loveParadise.jpg"
      }
      ,
      {
        time: "5:10",
        nameSong: "My KingDom Come",
        nameArtist: "Tiu Legacy",
        nameFile: "another/This is my kingdom come.mp3",
        img:
          "another/kingdom.jpg"
      },
      {

        time: "5:10",
        nameSong: "Faded Remix",
        nameArtist: "Alan Walker",
        nameFile: "another/Alan Walker - Faded (Kygo Remix) - Bài Hát Được Yêu Thích Nhất Tik Tok.mp3",
        img: "another/faded.jpg"
      },
      {
        time: "5:10",
        nameSong: "Hero Feat",
        nameArtist: "Cash Cash",
        nameFile: "another/Cash Cash - Hero feat. Christina Perri [Official Audio].mp3",
        img: "another/hero-feat.jpg"
      },
      {
        time: "5:10",
        nameSong: "Love Is Gone",
        nameArtist: "Slander",
        nameFile:
          "another/SLANDER - Love Is Gone.mp3",
        img: "another/slander.jpg"
      },
      {
        time: "5:10",
        nameSong: "Two Steps From Hell",
        nameArtist: "Messi x Win",
        nameFile: "another/Two Steps From Hell - Victory.mp3",
        img:
          "another/victory-messi.jpg"
      },
      {
        time: "5:10",
        nameSong: "Unstoppable Remix",
        nameArtist: "Sia",
        nameFile: "another/Unstoppable ( Remix ) - Sia.mp3",
        img:
          "another/unstoppable.jpg"
      },
      {
        time: "5:10",
        nameSong: "Nevada",
        nameArtist: "Cozi Zuehlsdorff",
        nameFile:
          "another/Vicetone - Nevada (ft. Cozi Zuehlsdorff).mp3",
        img:
          "another/nevada.jpg"
      },
      {
        time: "5:10",
        nameSong: "Lily",
        nameArtist: "Alan Walker, K-391 & Emelie Hollow",
        nameFile: "another/Alan Walker, K-391 & Emelie Hollow - Lily (Lyrics).mp3",
        img:
          "another/lili.jpg"
      }
      ,
      {
        time: "5:10",
        nameSong: "Sign",
        nameArtist: "DEAMN",
        nameFile: "another/DEAMN - Sign (Lyrics).mp3",
        img:
          "another/sign.jpg"
      }
      ,
      {
        time: "5:10",
        nameSong: "Summertime",
        nameArtist: "K-391",
        nameFile: "another/K-391 - Summertime [Sunshine].mp3",
        img:
          "another/k39Smer.jpg"
      }
      ,
      {
        time: "5:10",
        nameSong: "Despacito Mix",
        nameArtist: "Luis Fonsi, Daddy Girl Yankee",
        nameFile: "another/Luis Fonsi, Daddy Yankee - Despacito (Remix - India Dance Video) ft. Justin Bieber.mp3",
        img:
          "another/despacito.png"
      }
      ,
      {
        time: "5:10",
        nameSong: "Reality",
        nameArtist: "Lost Frequencies",
        nameFile: "another/Reality - Lost Frequencies - Lyrics + Vietsub..mp3",
        img:
          "another/reality.jpg"
      }
      ,
      {
        time: "5:10",
        nameSong: "Señorita",
        nameArtist: "Camila Cabello",
        nameFile: "another/Shawn Mendes, Camila Cabello - Señorita (Lyrics).mp3",
        img:
          "another/Camila Cabello.jpg"
      }
      ,
      {
        time: "5:10",
        nameSong: "Fly Away feat",
        nameArtist: "TheFatRat",
        nameFile: "another/TheFatRat - Fly Away feat. Anjulie.mp3",
        img:
          "another/flyAway.png"
      }
      ,
      {
        time: "5:10",
        nameSong: "Leemon Tree Mix",
        nameArtist: "BeTiuu, winn",
        nameFile: "another/_Lemon tree tiktok . Ronaldinho ảo thuật gia bóng đá.mp3",
        img:
          "another/leemon.jpg"
      }
      ,
      {
        time: "5:10",
        nameSong: "Nonstop Bay Lac 2021",
        nameArtist: "ThangNguyen Mix",
        nameFile: "another/nhacQuayHavana.mp3",
        img:
          "another/khabanh.jpg"
      }
      ,
      {
        time: "5:10",
        nameSong: "Phonics Song",
        nameArtist: "ThangNguyen Mix",
        nameFile: "another/Phonics Song - Gracie_ s Corner.mp3",
        img:
          "another/phonics.jpeg"
      }
      ,
      {
        time: "5:10",
        nameSong: "Quẩy tung nóc cùng Admin WIN",
        nameArtist: "Thắng Đẹp Trai",
        nameFile: "another/nonstop-2022-win.mp3",
        img:
          "another/win.jpeg"
      }
]

var listSongOf =[
    {
        nameSong:'Khuôn mặt đáng thương',
        nameArtist:'Sơn Tùng mtp',
        nameFile:'sontung/khuonmatdangthuong.mp3',
        img:'sontung/khuonmatdangthuong.webp',
        artist:'sontung'
    },
      {
        time: "5:10",
        nameSong: "EDM Nhac Tre 9x Remix 2012-2022",
        nameArtist: "Girl 9X",
        nameFile: "another/Top20NhacTre.mp3",
        img:
          "another/tiu.jpeg"
      }
      ,
      {
        time: "5:10",
        nameSong: "Làm Gì Phải Hốt",
        nameArtist: "Thuỳ Linh if Đen Vâu",
        nameFile: "another/Lam-gi-phai-hot.mp3",
        img:
          "another/hoang-thuy-linh3-xwly-6235-1608459306.jpeg"
      }
      ,
      {
        time: "5:10",
        nameSong: "Để Mị Nói Cho Mà Nghe",
        nameArtist: "Hoàng Thuỳ Linh",
        nameFile: "another/de-mi-noi-cho-ma-nghe.mp3",
        img:
          "another/vi-sao-de-mi-noi-cho-ma-nghe-thanh-cong-chiem-linh-thi-truong-85a76441.jpeg"
      }
      ,
      {
        time: "5:10",
        nameSong: "Ánh Nắng Của Anh",
        nameArtist: "Phúc Hô",
        nameFile: "another/Ánh Nắng Của Anh (Chờ Em Đến Ngày Mai OST).mp3",
        img:
          "another/kingdom.jpg"
      },
    {
        nameSong:'Anh sai rồi',
        nameArtist:'Sơn Tùng MTP',
        nameFile:'sontung/asairoi.mp3',
        img:'sontung/asairoi.jpg',
        artist:'sontung'
    },
    {
        nameSong:'Em của ngày hôm qua',
        nameArtist:'Sơn Tùng MTP',
        nameFile:'sontung/emcuangayhomqua.mp3',
        img:'sontung/emcuangayhomqua.webp',
        artist:'sontung'
    },
    {
        nameSong:'Lạc trôi',
        nameArtist:'Sơn Tùng MTP',
        nameFile:'sontung/lactroi.mp3',
        img:'sontung/lactroi.jpg',
        artist:'sontung'
    },
    {
        nameSong:'Hãy trao cho anh',
        nameArtist:'Sơn Tùng MTP',
        nameFile:'sontung/haytraochoanh.mp3',
        img:'sontung/haytraochoanh.jpg',
        artist:'sontung'
    },
    {
        nameSong:'Nàng thơ',
        nameArtist:'Amee',
        nameFile:'amee/nangtho.mp3',
        img:'amee/nangtho.webp',
        artist:'amee'
    },
    {
        nameSong:'Nói hoặc không nói',
        nameArtist:'Amee',
        nameFile:'amee/noihoackhongnoi.mp3',
        img:'amee/noihoackhongnoi.jpg',
        artist:'amee'
    },
    {
        nameSong:'Shay nắng',
        nameArtist:'Amee',
        nameFile:'amee/shaynang.mp3',
        img:'amee/shaynang.jpg',
        artist:'amee'
    },
    {
        nameSong:'Thay mọi cô gái yêu anh',
        nameArtist:'Amee',
        nameFile:'amee/thaymoicogaiiuanh.mp3',
        img:'amee/thaymoicogaiiuanh.jpg',
        artist:'amee'
    },
    {
        nameSong:'Sao ta ngược lối',
        nameArtist:'Đình dũng',
        nameFile:'dinhdung/saotanguocloi.mp3',
        img:'dinhdung/saotanguocloi.jpg',
        artist:'dinhdung'
    },
    {
        nameSong:'Câu hẹn câu thề',
        nameArtist:'Đình dũng',
        nameFile:'dinhdung/cauhencauthe.mp3',
        img:'dinhdung/cauhencauthe.jpg',
        artist:'dinhdung'
    },
    {
        nameSong:'Đừng hẹn kiếp sau',
        nameArtist:'Đình dũng',
        nameFile:'dinhdung/dunghenkiepsau.mp3',
        img:'dinhdung/dunghenkiepsau.jfif',
        artist:'dinhdung'
    },
    {
        nameSong:'Đế vương',
        nameArtist:'Đình Dũng',
        nameFile:'dinhdung/devuong.mp3',
        img:'dinhdung/devuong.jpg',
        artist:'dinhdung'
    },
    {
        nameSong:'Khác biệt to lớn',
        nameArtist:'Trịnh Thăng Bình',
        nameFile:'ttbinh/khacbiettolon.mp3',
        img:'ttbinh/khacbiettolon.jpg',
        artist:'ttbinh'
    },
    {
        nameSong:'Vỡ tan',
        nameArtist:'Trịnh Thăng Bình',
        nameFile:'ttbinh/votan.mp3',
        img:'ttbinh/votan.jpg',
        artist:'ttbinh'
    },
    {
        nameSong:'Người ấy',
        nameArtist:'Trịnh Thăng Bình',
        nameFile:'ttbinh/nguoiay.mp3',
        img:'ttbinh/nguoiay.jpg',
        artist:'ttbinh'
    },
    {
        nameSong:'Em ngủ chưa',
        nameArtist:'Trịnh Thăng Bình',
        nameFile:'ttbinh/emnguchua.mp3',
        img:'ttbinh/emnguchua.jpg',
        artist:'ttbinh'
    },
    {
        nameSong:'Trái đất đẹp nhất khi có em',
        nameArtist:'Đức phúc',
        nameFile:'ducphuc/traidatdepnhatkhicoem.mp3',
        img:'ducphuc/traidatdepnhatkhicoem.jfif',
        artist:'ducphuc'
    },
    {
        nameSong:'Năm ấy',
        nameArtist:'Đức phúc',
        nameFile:'ducphuc/namay.mp3',
        img:'ducphuc/namay.jpg',
        artist:'ducphuc'
    },
    {
        nameSong:'Ngày đầu tiên',
        nameArtist:'Đức phúc',
        nameFile:'ducphuc/ngaydautien.mp3',
        img:'ducphuc/ngaydautien.jpg',
        artist:'ducphuc'
    },
    {
        nameSong:'Gửi ngàn lời yêu',
        nameArtist:'Đức phúc',
        nameFile:'ducphuc/guinganloiyeu.mp3',
        img:'ducphuc/guinganloiyeu.jpg',
        artist:'ducphuc'
    },
    {
        nameSong:'Tan',
        nameArtist:'Miu Quys Toc',
        nameFile:'ducphuc/tan.mp3',
        img:'ducphuc/miu.webp',
        artist:'ducphuc'
    },
    {
        nameSong:'Top 6 The Masked Singer Viet Name',
        nameArtist:'Be Tiu',
        nameFile:'ducphuc/6song.mp3',
        img:'ducphuc/lbh.jpg',
        artist:'ducphuc'
    }
]
song.setAttribute("src",`./musics/${topSong[topSongIndex].nameFile}`);

playBtn.addEventListener('click', playMusic);
function playMusic(){
    if(isPlaying){
        if( topSongThumb.classList.contains('rotatePause')) topSongThumb.classList.remove('rotatePause');
        topSongThumb.classList.add('rotatePlay');
        playBtn.innerHTML = `<i class="fa-sharp fa-solid fa-circle-pause"></i>`;
        isPlaying = false;
        setTimeout(() => {
            song.play();
        }, 3000)
    } else {
        song.pause();
        playBtn.innerHTML = `<i class="fa-solid fa-circle-play"></i>`;
        isPlaying = true;
        if( topSongThumb.classList.contains('rotatePlay')) topSongThumb.classList.remove('rotatePlay');
        topSongThumb.classList.add('rotatePause');
        setTimeout(function() {
            topSongThumb.classList.remove('rotatePause');
            },500)
    }
}
backWard.addEventListener('click',backMusic);
forWard.addEventListener('click',nextMusic);
let termp;
function nextMusic(){
    isRandom = true;
    randomMusic();
    // console.log(isTopSongPlaying, isAnotherSongPlaying);
    if( isTopSongPlaying){
        topSongIndex++;
        if ( topSongIndex == topSong.length)
            topSongIndex =0;
            itemTopSong[topSongIndex].scrollIntoView({behavior: "smooth", block: "center"});
        
        replaceAtributeTopSong();
        isPlaying =true;
        playMusic();
        renderTopSong();
    } else if(isAnotherSongPlaying){
        iOfAnotherSong++;
        // console.log(iOfAnotherSong);
        
        // for ( var num = 0; num < arrayAdd.length; num++){
        //     if( arrayAdd[num] == indexOfAnotherSong){
        //         console.log(arrayAdd[num++],iOfAnotherSong);
        //         if(iOfAnotherSong == lengthOfarrayAdd) {
        //             iOfAnotherSong =0;
        //             playAnotherSong(arrayAdd[0],iOfAnotherSong);
        //         }
        //         else  playAnotherSong(arrayAdd[num++],iOfAnotherSong);
        //         break;
        //     }
        // }
        if ( iOfAnotherSong == listSongOf.length)
            iOfAnotherSong =0;
            anotherSongItem[iOfAnotherSong].scrollIntoView({behavior: "smooth", block: "center"});
        
        replaceAtributeTopSong();
        // console.log("vao roi bne");
        isPlaying =true;
        playAnotherSong(iOfAnotherSong ,iOfAnotherSong)
        // renderTopSong();
    } else {
        if ( currentNum < listSongOf.length-1){
            var currentNum2 = currentNum;
            currentNum++;
            indexRecentSongPlaying++;
        }

        if ( listSongOf[currentNum].artist == listSongOf[currentNum2].artist) //chỗ này currentNum đã được tăng giá trị
        {   
            
            
            // currentNum++;
            // listArtistIndex++;
            // indexRecentSongPlaying=0;
            playMusicOf(currentNum,indexRecentSongPlaying);
        } else {
            termp = indexRecentSongPlaying;
            indexRecentSongPlaying=0;
            if ( listArtistIndex <= 5) {listArtistIndex++;
            renderListMusicOf(listSongOf[currentNum].artist,listArtistIndex);
            playMusicOf(currentNum,indexRecentSongPlaying);}
            // currentNum++;
        }
    }
}
function backMusic(){
    isRandom = true;
    randomMusic();
    if( isTopSongPlaying ){
        topSongIndex--;
        if ( topSongIndex <0) topSongIndex = topSong.length -1;
        itemTopSong[topSongIndex].scrollIntoView({behavior: "smooth", block: "center"});
        replaceAtributeTopSong();
        isPlaying =true;
        playMusic();
        renderTopSong();
    }else if(isAnotherSongPlaying){
        iOfAnotherSong--;
        // console.log(iOfAnotherSong);

        
        for ( var num = 0; num < arrayAdd.length; num++){
            if( arrayAdd[num] == indexOfAnotherSong){
                if(iOfAnotherSong < 0) {
                    iOfAnotherSong =0;
                    playAnotherSong(arrayAdd[0],iOfAnotherSong);
                }
                else    playAnotherSong(arrayAdd[num--],iOfAnotherSong);
                break;
            }
        }
        
    }else {
        var currentNum2 = currentNum;
        currentNum--;
        indexRecentSongPlaying--;
        if (indexRecentSongPlaying < 0){
            indexRecentSongPlaying =0;
            }
        if (currentNum < 0 ) currentNum = 0;
            // console.log(currentNum)
// renderListMusicOf(listArtistIndex,nameArtistIndex);
        if ( listSongOf[currentNum].artist == listSongOf[currentNum2].artist) //chỗ này currentNum đã được tăng giá trị
        {   
            
            
            // currentNum++;
            // listArtistIndex++;
            // indexRecentSongPlaying=0;
            playMusicOf(currentNum,indexRecentSongPlaying);
        } else {

            indexRecentSongPlaying=3;
            if ( listArtistIndex >= 0) {listArtistIndex--;
            renderListMusicOf(listSongOf[currentNum].artist,listArtistIndex);
            playMusicOf(currentNum,indexRecentSongPlaying);
            }
            // currentNum++;
        }
    }
}

let listRandom = [];
function randomNewMusic(){

    while( listRandom.length < listSongOf.length ){
        var termpValue = Math.floor(Math.random()* listSongOf.length);
        if ( checkValue(termpValue),listRandom) {
            listRandom.push(termpValue);
        }
    }
}
var indexRandm = 0;
function runRandomList(){
    if( indexRandm == listRandom.length) indexRandm=0;
    song.setAttribute("src",`./musics/${listSongOf[listRandom[indexRandm]].nameFile}`);
    miniArtist.textContent = `${listSongOf[listRandom[indexRandm]].nameArtist}`;
    miniTitle.textContent = `${listSongOf[listRandom[indexRandm]].nameSong}`;
    topSongThumb.setAttribute("src",`./img/${listSongOf[listRandom[indexRandm]].img}`);
    playThumb.setAttribute("src",`./img/${listSongOf[listRandom[indexRandm]].img}`);
    isPlaying =true;
    playMusic();
    indexRandm++;
}
let isRepeat = false;
let isRandom = false;
repeat.addEventListener('click',repeatMusic);
iconRandom.addEventListener('click',randomMusic);
function randomMusic(){
    if( isRandom == false ) {
        listRandom= [];
        isRepeat = true;
        isRandom = true;
        repeatMusic();
        iconRandom.style.color = 'green';
        randomNewMusic();
        // isTopSongPlaying = false;
        renderTopSong();
    } else {
        isRandom = false;
        iconRandom.style.color = 'black';
        // isTopSongPlaying = true;

    }
    
}
function repeatMusic(){
    if ( isRepeat == false ){
        isRepeat = true;
        repeat.setAttribute("style",`color:green`);
    } else {
        isRepeat = false;
        repeat.setAttribute("style",`color:black`);

    }
    
}


function playTopSong(index){
    itemTopSong[index].scrollIntoView({behavior: "smooth", block: "center"});
    isAnotherSongPlaying = false;
    removeWhiteBackground(0);
    renderListMusicOf('sontung',0);
    isTopSongPlaying = true;
    topSongIndex = index;
    replaceAtributeTopSong();
    isPlaying = true;
    playMusic();
    renderTopSong();
}
function autoNextTopSong(){
    if(isRepeat == false && isRandom == false ){
    if( song.currentTime == song.duration){
            nextMusic();    
        } 
    } else if( isRepeat){
        if( song.currentTime >= song.duration -1 ) {
            song.currentTime = 0;
        }
    } else if ( isRandom ){
        if( song.currentTime == song.duration){
        runRandomList();
        }
    } 
}

var seekbar = document.querySelector('.seekbar')
song.ontimeupdate = function () { seekbar.value = song.currentTime }
handleSeekBar = function () { song.currentTime = seekbar.value }


function displayTimer(){
    seekbar.min = 0;
    seekbar.max = song.duration;
    curtime.textContent = formatTimer(song.currentTime);
    durtime.textContent = formatTimer(song.duration);
}
function formatTimer(num){
    var min = Math.floor( num /60);
    var sec = Math.floor( num - min*60);
    if ( sec < 10) return `${min}:0${sec}`
    else return `${min}:${sec}`
}
// songBar.addEventListener('change',changeBar);
function changeBar(){
    song.currentTime =songBar.value ;
}var itemTopSong =[];
function renderTopSong(){
    listTopSong.innerHTML = '';
    for( var index= 0; index< topSong.length ; index++ ){
        if (isTopSongPlaying){
    if (index == topSongIndex){
        
        listTopSong.innerHTML += `
        <div onclick="playTopSong(${index})" class="topSong" style="background-color:white">
        <div class="topMusicLeft">
                <div class="topSong_rank"><img class="iconwavegif" src="./icon/wave.gif" alt=""></div>
                <div class="topSong_love"><i class="fa-light fa-heart"></i></div>
                <div class="topSong_name">
                    <div class="topSong_name-nameSong">${topSong[index].nameSong}</div>
                    <div class="topSong_name-artist">${topSong[index].nameArtist}</div>
                </div> 
        </div>
        <div class="topSong_time" style="color:black">${topSong[index].time}</div>
    </div>`
        } else {
            listTopSong.innerHTML += `
        <div onclick="playTopSong(${index})" class="topSong" >
        <div class="topMusicLeft">
                <div class="topSong_rank">${Number(index)+1}</div>
                <div class="topSong_love"><i class="fa-light fa-heart"></i></div>
                <div class="topSong_name">
                    <div class="topSong_name-nameSong">${topSong[index].nameSong}</div>
                    <div class="topSong_name-artist">${topSong[index].nameArtist}</div>
                </div> 
        </div>
        <div class="topSong_time">${topSong[index].time}</div>
    </div>`
        }
    } else {
        listTopSong.innerHTML += `
        <div onclick="playTopSong(${index})" class="topSong" >
        <div class="topMusicLeft">
                <div class="topSong_rank">${Number(index)+1}</div>
                <div class="topSong_love"><i class="fa-light fa-heart"></i></div>
                <div class="topSong_name">
                    <div class="topSong_name-nameSong">${topSong[index].nameSong}</div>
                    <div class="topSong_name-artist">${topSong[index].nameArtist}</div>
                </div> 
        </div>
        <div class="topSong_time">${topSong[index].time}</div>
    </div>`
    }
    }
    itemTopSong = document.querySelectorAll('.topSong');
}
renderTopSong();


async function replaceAtributeTopSong(){
    if (isOnlineSong) {
        const src = await handleClickSearchSong(topSong[topSongIndex].nameFile);
        song.setAttribute("src", src);
        topSongThumb.setAttribute("src", topSong[topSongIndex].img);
        playThumb.setAttribute("src", topSong[topSongIndex].img);
        miniTitle.textContent = `${topSong[topSongIndex].nameSong}`;
        miniArtist.textContent = `${topSong[topSongIndex].nameArtist}`;
    }else {
        song.setAttribute("src",`./musics/${topSong[topSongIndex].nameFile}`);
        miniArtist.textContent = `${topSong[topSongIndex].nameArtist}`;
        miniTitle.textContent = `${topSong[topSongIndex].nameSong}`;
        topSongThumb.setAttribute("src",`./img/${topSong[topSongIndex].img}`);
        playThumb.setAttribute("src",`./img/${topSong[topSongIndex].img}`);
    }
}
replaceAtributeTopSong();

function renderRecentSong(artist,stt){
    recentPlayedTitle.textContent = `Top song of singer`;
    listArtistItem[stt].classList.add('recentPlayed_clicked');
    listArtistitemIconRunning[stt].innerHTML = '<img class="iconwavegif listArtist_item-icongift" src="./icon/list.gif" alt="">';
    recentSong.innerHTML = '';
    var i=-1;
    for ( var index in listSongOf){
        if(artist == listSongOf[index].artist){
            i++;
            recentSong.innerHTML += `
            <div class="recentPlayed_item recentPlayed_item${i}" onclick="playMusicOf(${index},${i})">
                    <div class="recentPlayed_item-img1">
                        <img class="recentPlayed_item-img" src="./img/${listSongOf[index].img}" alt="">
                    </div>
                    <div class="recentPlayed_item-nameSong">
                        ${listSongOf[index].nameSong}
                    </div>
                    <!-- <div class="recentPlayed_item-artist">
                        SON TUNG
                    </div> --!>
                </div>
            `
        }
    } 

    
}
var currentNum;
var indexRecentSongPlaying;
let isRecentSongPlaying = true;
function playMusicOf(num,i){
    indexRecentSongPlaying=i;
    currentNum = num;
    isTopSongPlaying = false;
    isAnotherSongPlaying = false;
    removeWhiteBackground(0);
    recentPlayedItem = document.querySelectorAll('.recentPlayed_item-img');
    for( var index1 =0;index1< recentPlayedItem.length; index1++ ){
        if( recentPlayedItem[index1].classList.contains('recentPlayed_item-img_clicked'))
    recentPlayedItem[index1].classList.remove('recentPlayed_item-img_clicked');
    }
    recentPlayedItem[i].classList.add('recentPlayed_item-img_clicked');
    renderTopSong();
    song.setAttribute("src",`./musics/${listSongOf[num].nameFile}`);
    miniArtist.textContent = `${listSongOf[num].nameArtist}`;
    miniTitle.textContent = `${listSongOf[num].nameSong}`;
    topSongThumb.setAttribute("src",`./img/${listSongOf[num].img}`);
    playThumb.setAttribute("src",`./img/${listSongOf[num].img}`);
    isPlaying =true;
    playMusic();
}


renderRecentSong('sontung',0);
var listArtistIndex = 0;
var nameArtistIndex ;
function renderListMusicOf(nameArtist,stt){
    nameArtistIndex = nameArtist;
    listArtistIndex = stt;
    for ( var i=0; i< listArtistItem.length ; i++){
        if(listArtistItem[i].classList.contains('recentPlayed_clicked')) 
        listArtistItem[i].classList.remove('recentPlayed_clicked');
        listArtistitemIconRunning[i].innerHTML = '';
    }
    renderRecentSong(nameArtist,stt);
}

// change volume //
function changevolume(amount)
    {
        // console.log(amount/100)
        let count = amount/100;
        song.volume = count;
    }

isMute = false;
function muteVol(){
    if( isMute ) {
        volIcon.innerHTML = '<i class="fa-solid fa-volume-high"></i>'
        isMute = false;
        changevolume(volRange.value);
    } else
    {
    volIcon.innerHTML = '<i class="fa-solid fa-volume-slash"></i>'
    isMute = true; 
    changevolume(0);
    }
}
// end code change volume

// code render another song
let arrayAdd = [];
function checkValue(num){
    var dem= true;
    for ( var i = 0 ; i < arrayAdd.length ; i++){
        if( arrayAdd[i] == num ) dem = false;
    }
    return dem;
}
let lengthOfarrayAdd = 0;
function pushArray(){
    // for ( var i = 0 ; i < topSong.length ; i++ ){
    //     var termpValue = Math.floor(Math.random()* listSongOf.length);
    //     if ( checkValue(termpValue)) {
    //         arrayAdd.push(termpValue);
    //         if(arrayAdd.length == 5 ) {
    //             break;
    //         }
    //     } else i =0;
    // }
    if ( mobile ){ lengthOfarrayAdd = listSongOf.length} else lengthOfarrayAdd = 4;
    while( arrayAdd.length <lengthOfarrayAdd ){
        var termpValue = Math.floor(Math.random()* listSongOf.length);
        if ( true) {
            arrayAdd.push(termpValue);
        }
    }
}
function renderAnotherSong(){
    arrayAdd = [];
    pushArray();
    anotherSong.innerHTML = '';
    for ( var i = 0 ; i < listSongOf.length ; i++){
        anotherSong.innerHTML += `
        <div class="anotherSong_item" onclick="playAnotherSong(${i},${i})">
                    <div class="anotherSong_item-img"><img class="anotherSong_item-img" src="./img/${listSongOf[i].img}" alt=""></div>
                    <div class="anotherSong_item-name">
                        <span class="anotherSong_item-nameSong">${listSongOf[i].nameSong}</span>
                    <div class="anotherSong_item-name2">
                    <span class="anotherSong_item-nameArtist">${listSongOf[i].nameArtist}</span>
                    <div class="iconPlaying"></div> </div>
                    </div>
                    <div class="anotherSong_item-iconRunning"></div>
                </div>
        `
    }
}
let isAnotherSongPlaying = true;
renderAnotherSong();

let anotherSongItem = document.querySelectorAll('.anotherSong_item');
let iconPlaying = document.querySelectorAll('.iconPlaying');
function removeWhiteBackground(i){
    
    for ( var index1 = 0 ; index1 < anotherSongItem.length ; index1++){
        if ( anotherSongItem[index1].classList.contains('anotherSong_item-clicked'))
        anotherSongItem[index1].classList.remove('anotherSong_item-clicked');
        iconPlaying[index1].innerHTML = '';
    }
    if ( isAnotherSongPlaying )
    {
        iconPlaying[i].innerHTML = '<img class="iconwavegif" src="./icon/wave.gif" alt="">';
        anotherSongItem[i].classList.add('anotherSong_item-clicked');
    }
}

let iOfAnotherSong = 0;
let indexOfAnotherSong;

function playAnotherSong(index,i){
    if( mobile ) {
        anotherSongItem[i].scrollIntoView({behavior: "smooth", block: "center"});
   // loop.classList.remove('active');
    }
    iOfAnotherSong = i;
    // console.log(iOfAnotherSong);
    indexOfAnotherSong = index;
    renderListMusicOf('sontung',0);
    isAnotherSongPlaying = true;
    isTopSongPlaying = false;
    renderTopSong();
    removeWhiteBackground(i);
    song.setAttribute("src",`./musics/${listSongOf[index].nameFile}`);
    miniArtist.textContent = `${listSongOf[index].nameArtist}`;
    miniTitle.textContent = `${listSongOf[index].nameSong}`;
    topSongThumb.setAttribute("src",`./img/${listSongOf[index].img}`);
    playThumb.setAttribute("src",`./img/${listSongOf[index].img}`);
    isPlaying =true;
    playMusic();
}
var search = document.querySelector('.search')
var btnSearch = document.querySelector('.btn-search')
var dataSearch = document.querySelector('.search-value')

search.addEventListener('submit', e => {
    e.preventDefault()
    const search = dataSearch.value;
    loading.style.display = "flex"
    handleSearchMusic(search)
    dataSearch.value = "";
})

btnSearch.onclick = () => {
    const search = dataSearch.value;
    loading.style.display = "flex"
    handleSearchMusic(search)
    dataSearch.value = "";
}
var isLoopSong;
function handleSearchMusic(name) {
    fetch(`https://service-betiu.onrender.com/music/view-song?name=${name}`)
    // fetch(`http://localhost:3001/music/chart-home`)
    // fetch(`http://localhost:3001/music/new-release-chart`)
    .then(res => res.json())
    .then(result => {
        song.src = "";
        loading.style.display = "none"
        topSong = [];
        if(result.data.songs != null) {
            result.data.songs.forEach((data,index) => {
            // result.data.RTChart.items.forEach((data,index) => {
            // result.data.items.forEach((data,index) => {
                const item = 
                    {
                        time: data.duration,
                        nameSong: data.title,
                        nameArtist: data.artistsNames,
                        nameFile: data.encodeId,
                        img:
                          data.thumbnailM
                      }
                topSong.push(item)
            })
            isOnlineSong = true;
            topMusicTitle.textContent = "Result available:"
            topSongThumb.src = topSong[0].img;
            playThumb.src = topSong[0].img;
            miniTitle.textContent = topSong[0].nameSong;
            miniArtist.textContent = topSong[0].nameArtist;
            topSongIndex = 0;
            song.pause();
            renderTopSong();
        }else {
            toastAram("Not fond song. Please try again")
        }
    })
}

async function handleClickSearchSong(id) {
    return fetch(`https://service-betiu.onrender.com/music/song/${id}`)
    .then(res => res.json())
    .then(result => {
        if (result.msg === "Success") {
            src = result.data[128]
            return src;
        }
        else {
            toastAram("Cann't play music. Because copyright infringement")
            topSongThumb.classList.remove('rotatePlay');
            playBtn.innerHTML = `<i class="fa-solid fa-circle-play"></i>`;
            // if(topSongIndex != 0) {
                setTimeout(()=>{
                    nextMusic();
                }, 1000)
            // }
        }
    })
}

function toastAram (e) {
    const toastMain = document.getElementById('toast');
    const toast = document.createElement('div');
    if(toastMain) {
        toast.classList.add('annoucement')
        toast.innerHTML = `
            <i class="fa fa-solid fa-bug error"></i>
            <p class="toast-text">${e}</p>
        `;
        toastMain.appendChild(toast);
        window.scrollTo(0, 0);
        setTimeout(function(){
            toastMain.removeChild(toast);
        },8000)
    }
}

function toastSuccess (e) {
    const toastMain = document.getElementById('toast');
    const toast = document.createElement('div');
    if(toastMain) {
        toast.classList.add('toast', 'toastSuccess')
        toast.innerHTML = `
            <i class="ti-check"></i>
            <p class="toast-text">${e}</p>
        `;
        toastMain.appendChild(toast);
        setTimeout(function(){
            toastMain.removeChild(toast);
        },8000)
    }
}

top100.onclick = () => {
    loadingImg.src = "https://thumbs.gfycat.com/CircularYawningChihuahua-max-1mb.gif";
    loading.style.display = "flex"
    // fetch(`https://service-betiu.onrender.com/music/view-song?name=${name}`)
    fetch(`https://service-betiu.onrender.com/music/chart-home`)
        // fetch(`http://localhost:3001/music/new-release-chart`)
        .then(res => res.json())
        .then(result => {
            song.src = "";
            loading.style.display = "none"
            topSong = [];
            if (result.data.RTChart.items != null) {
                // result.data.songs.forEach((data,index) => {
                result.data.RTChart.items.forEach((data, index) => {
                    // result.data.items.forEach((data,index) => {
                    const item =
                    {
                        time: data.duration,
                        nameSong: data.title,
                        nameArtist: data.artistsNames,
                        nameFile: data.encodeId,
                        img:
                            data.thumbnailM
                    }
                    topSong.push(item)
                })
                loading.style.display = "none"
                isOnlineSong = true;
                topMusicTitle.textContent = "Top 100 best songs"
                topSongThumb.src = topSong[0].img;
                playThumb.src = topSong[0].img;
                miniTitle.textContent = topSong[0].nameSong;
                miniArtist.textContent = topSong[0].nameArtist;
                topSongIndex = 0;
                song.pause();
                renderTopSong();
            } else {
                toastAram("Not fond song. Please try again")
            }
        })
}

topTrending.onclick = () => {
    loadingImg.src = "https://thumbs.gfycat.com/CircularYawningChihuahua-max-1mb.gif";
    loading.style.display = "flex"
    // fetch(`https://service-betiu.onrender.com/music/view-song?name=${name}`)
    // fetch(`https://service-betiu.onrender.com/music/chart-home`)
    fetch(`https://service-betiu.onrender.com/music/new-release-chart`)
        .then(res => res.json())
        .then(result => {
            song.src = "";
            loading.style.display = "none"
            topSong = [];
            if (result.data.items != null) {
                // result.data.songs.forEach((data,index) => {
                // result.data.RTChart.items.forEach((data,index) => {
                result.data.items.forEach((data, index) => {
                    const item =
                    {
                        time: data.duration,
                        nameSong: data.title,
                        nameArtist: data.artistsNames,
                        nameFile: data.encodeId,
                        img:
                            data.thumbnailM
                    }
                    topSong.push(item)
                })
                loading.style.display = "none"
                isOnlineSong = true;
                topMusicTitle.textContent = "Top Trending on BeTiuMusic"
                topSongThumb.src = topSong[0].img;
                playThumb.src = topSong[0].img;
                miniTitle.textContent = topSong[0].nameSong;
                miniArtist.textContent = topSong[0].nameArtist;
                topSongIndex = 0;
                song.pause();
                renderTopSong();
            } else {
                toastAram("Not fond song. Please try again")
            }
        })
}

// listTopSong.onclick = (e) => {
//     const optionNode = e.target.closest('.topSong_love');
//     const nodeEle = document.querySelector(".topSong_love")
//     if(optionNode != null) {
//         const bodydata = topSong[topSongIndex];
//         console.log(nodeEle);
//         console.log(nodeEle.classList.contains('active'));
//         if (nodeEle.classList.contains('active')) {
//             nodeEle.classList.remove("active");
//             console.log(nodeEle, "if");
//         }else {
//             nodeEle.classList.add("active");
//             console.log(nodeEle, "else");
//         }
//         console.log(bodydata);
//     }
// }

btnEditProfile.onclick = () => {
    modalProfile.style.display = 'flex'
    modalEditProfile.style.transform = 'translateY(0)';
    modalEditProfile.style.transition = '4s';
}

btnCloseProfile.onclick = () => {
    modalProfile.style.display = 'none'
}

var fileUploadAvatar = document.querySelector("#upload-avatar")
var imgUploadAvatar = document.querySelector(".profile-avatar-img")
var profileNameContent = document.querySelector('.profile-name-content');
var profilePhoneContent = document.querySelector('.profile-phone-content');
var editAvatarLink;

fileUploadAvatar.addEventListener("change", ev => {
    loading.style.display = "flex"
    const formdata = new FormData()
    formdata.append("image", ev.target.files[0])
    fetch("https://api.imgur.com/3/image/", {
        method: "post",
        headers: {
            Authorization: "Client-ID eb9173f09f940b0"
        },
        body: formdata
    }).then(data => data.json()).then(result => {
        loading.style.display = "none"
        imgUploadAvatar.src = result.data.link;
        editAvatarLink = result.data.link;
        toastSuccess("Upload success")
    })
    .catch((er) => {
        loading.style.display = "none"
        toastAram("Faild Upload")
    })
})

modalEditProfile.addEventListener('submit', async (e) => {
    e.preventDefault();
    loading.style.display = "flex"
    const userId = localStorage.getItem("id");
    const data = {
        firstName: covertUserName(profileNameContent.value)[0],
        lastName: covertUserName(profileNameContent.value)[1],
        phone: profilePhoneContent.value
    }
    if(editAvatarLink != null && editAvatarLink !== "") {
        data.avatar = editAvatarLink;
    }
    fetch(`https://service-betiu.onrender.com/api/v1/update/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => {
        console.log(result);
        toastSuccess("Update Success")
        modalProfile.style.display = 'none'
        loading.style.display = "none"
        location.reload()
    })
    .catch(e => {
        toastAram("Update profile faild. Please try again")
        loading.style.display = "none"
    })
})

function covertUserName(str) {
    const array = [];
    const strNew = str.split(' ');
    const latestItem = strNew.pop()
    array.push(strNew.join(' '))
    array.push(latestItem)
    return array;
}

var btnChangePassword = document.querySelector('.profile-password-content');
btnChangePassword.onclick = () => {
    
}