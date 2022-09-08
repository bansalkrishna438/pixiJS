const Application = PIXI.Application;

const app = new Application({
    width:500,
    height:500,
   transparent:false,
   antialias: true
});

app.renderer.backgroundColor = 0x23395D;
app.renderer.resize(window.innerWidth, window.innerHeight);


document.body.appendChild(app.view);