var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["ed8c6260-3f8c-4844-a1f9-50db301a0714","018d2003-dd5c-493e-886e-c451cb3b7f38"],"propsByKey":{"ed8c6260-3f8c-4844-a1f9-50db301a0714":{"name":"alienBlue_walk_1","sourceUrl":null,"frameSize":{"x":69,"y":98},"frameCount":2,"looping":true,"frameDelay":12,"version":"O1GLk9NWVLbjsPnW6sdSne_s.SdF5Aad","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":138,"y":98},"rootRelativePath":"assets/ed8c6260-3f8c-4844-a1f9-50db301a0714.png"},"018d2003-dd5c-493e-886e-c451cb3b7f38":{"name":"flat_medal1_1","sourceUrl":"assets/api/v1/animation-library/gamelab/PRkI5l8nw93v8.QqAKEyTDO9Rhk3L66A/category_board_games_and_cards/flat_medal1.png","frameSize":{"x":41,"y":74},"frameCount":1,"looping":true,"frameDelay":2,"version":"PRkI5l8nw93v8.QqAKEyTDO9Rhk3L66A","categories":["board_games_and_cards"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":41,"y":74},"rootRelativePath":"assets/api/v1/animation-library/gamelab/PRkI5l8nw93v8.QqAKEyTDO9Rhk3L66A/category_board_games_and_cards/flat_medal1.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var jewel = createSprite(370, 30, 5, 5);
jewel.setAnimation("flat_medal1_1");

var thief = createSprite(200, 200 ,20,20);
thief.setAnimation("alienBlue_walk_1");

var laser1 = createSprite(100, 400, 200, 5);
laser1.shapeColor="red";
laser1.velocityY=2;


var laser2 = createSprite(300, 0, 200,5 );
laser2.shapeColor="red";
laser2.velocityY=-2;

var laser3 = createSprite(0, 200, 5, 200);
laser3.shapeColor="red";
laser3.velocityX=-2;


var laser4 = createSprite(300,200, 5, 200);
laser4.shapeColor="red";
laser4.velocityX=2;


function draw() {
if (keyWentDown(RIGHT_ARROW)) {
  thief.velocityX=4;
  thief.velocityY=0;
    
  }
if (keyWentDown(LEFT_ARROW)) {
   thief.velocityX=-4;
   thief.velocityY=0;
   
  }
if (keyWentDown(UP_ARROW)) {
  thief.velocityX=0;
  thief.velocityY=-4;

  }
if (keyWentDown(DOWN_ARROW)) {
  thief.velocityX=0;
  thief.velocityY=4;
  
    
  }
  createEdgeSprites();
   laser1.bounceOff(edges);
   laser2.bounceOff(edges);
   laser3.bounceOff(edges);
   laser4.bounceOff(edges);
                                                                                           
 drawSprites();
  if (laser1.collide(thief)|| laser2.collide(thief)||laser3.collide(thief)||laser4.collide(thief)) {
  stroke(0);
  fill(0);
  textSize(24);
  text("THIEF IS CAUGHT",120,200);
  text.setVelocity(50,50);
   }
background("Skyblue");

drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
