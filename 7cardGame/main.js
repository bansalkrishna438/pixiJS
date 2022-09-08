const game = new PIXI.Application({
  width: innerWidth,
  height: innerHeight,
  backgroundColor: 0x3366ff,
});
document.getElementById("game").append(game.view);
loadAssets([
  { name: "back", url: "assets/card.png" },
  { name: "front", url: "assets/card.png" },
], start);
const pBar = document.getElementById("bar");
const pText = document.getElementById("progress");
function preload(e) {
  pBar.style.width = e.progress * 2 + "%";
  pText.innerText = e.progress + "%";
  if (e.progress === 100) {
    console.log("hide loader");
    setTimeout(() => {
      document.getElementById("loader").style.display = "none";
    }, 500);
  }
  console.log(e.progress);
}
function loadAssets(list, onLoadComplete) {
  game.loader.onProgress.add(preload);
  game.loader.add(list).load(onLoadComplete);
}

  function start(loader, resources) {
    console.log('params ', arguments);
    
      
    for(var i=0;i<=12;i++)
    {
      const deck = new PIXI.Texture(resources['back'].texture,
      new PIXI.Rectangle(0,384,71,95));
      const back = PIXI.Sprite.from(deck);
      back.scale.set(1.2);
      game.stage.addChild(back);
    }
    for(var i=0;i<=12;i++)
    {
      const smily = new PIXI.Texture(resources['front'].texture,
      new PIXI.Rectangle(0,0,71,95));
      const front = PIXI.Sprite.from(smily);
      front.scale.set(1.2);
      game.stage.addChild(front);
  }
}

