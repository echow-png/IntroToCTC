// play with SOUND ON (but not too loud lol)!!

let vid;

function preload() {
  vid = createVideo('pterogif.mp4');
  vidMouthOpen = createVideo('pterogifmouthopen.mp4');
  AUGH = createAudio('AUGH.mp3');
  getOUT = createAudio('Get OUT!!.mp3');
  vineBoom = createAudio('Vine Boom.mp3');
  gojo = createAudio('gojo.mp3');
  metalPipe = createAudio('Metal pipe.mp3');
  Gay = createAudio('Gay.mp3');
  Wow = createAudio('Wow.mp3');
  yippee = createAudio('yippee.mp3');
  fart = createAudio('fart.mp3');
  sans = createAudio('megalovania but its just the first four notes.mp3');
}


function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("mySketch");
  canvas.position(0,0);
  canvas.style('z-index', '-1');

  vid.hide();          // hide the HTML video element
  vid.play();        // start playback
  vidMouthOpen.hide();
  vidMouthOpen.play();
}

function draw() {
    rect(20, 20, 500, 500)
    image(vid, 0, 0, windowWidth, windowHeight);
}

function draw() {
  background(0);
  vid.pause();
  vidMouthOpen.pause();
  
//defines audioList as array so that audiotrack can be called later
  let audioList = [AUGH, getOUT, vineBoom, gojo, metalPipe, Gay ,Wow, yippee, fart,sans]
  let audioTrack = random(audioList);

  let c = map(mouseX, 0, windowWidth, 0, 1.1);
  vid.time(c);       // jump to frame according to mouse location 
  vidMouthOpen.time(c);  
  print(mouseX)  

  
    if (mouseIsPressed == true) {   
    // vidMouthOpen.time(c);  //i think putting this within the if statement might make it run faster? jk my browser is just ass
    image(vidMouthOpen, 0, 0, windowWidth, windowHeight);  
        // audioTrack.play();
  } else {
    image(vid, 0, 0, windowWidth, windowHeight);
    audioTrack.pause();
    // audioTrack.time(0.3);
  }
  
}

function mousePressed() {
  
      let audioTrack = random([AUGH, getOUT,vineBoom,gojo,metalPipe,Gay,Wow,yippee,fart,sans]);
  
    audioTrack.time(0.5)
    audioTrack.play();
}

//next tasks: redo 3d model so it looks at camera (eye rotation)
//typography animation with HTML - integrate into website