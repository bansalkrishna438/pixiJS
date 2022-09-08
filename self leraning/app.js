const Application = PIXI.Application;

const app = new Application({
    width:500,
    height:500,
    transparent:false,
    antialias:true
});

app.renderer.backgroundColor = 0x233950

app.renderer.resize(window.innerWidth,window.innerHeight);

app.renderer.view.style.position='absolute';

document.body.appendChild(app.view);


const Graphics = PIXI.Graphics;

const rectangle = new Graphics();
rectangle.beginFill(0xAA3388)
.lineStyle(4,0xFFA00,1)
rectangle.drawRect(200,200,100,200);
rectangle.endFill();

app.stage.addChild(rectangle);

const poly = new Graphics();
poly.beginFill(0xFF66FF)
.drawPolygon([
    600,50,
    800,150,
    900,300,
    400,400
])
.endFill()

app.stage.addChild(poly);

const circle = new Graphics();
circle.beginFill(0x22AACC)
.drawCircle(440,200,80)
.endFill();

app.stage.addChild(circle);
app.stage.addChild(poly);

const line = new Graphics();
line.lineStyle(5, 0xFFEA00, 1)
.moveTo(100,100)
.lineTo(100,800);

app.stage.addChild(line);

const torus =new Graphics();
torus.beginFill(0xFFFDDD)
.drawTorus(90,300,80,100,0,Math.PI /2)
.endFill();

app.stage.addChild(torus);

const star = new Graphics();
star.beginFill(0xADADAD)
.drawStar(500,500,30,80)
.endFill();

app.stage.addChild(star);


const style = new PIXI.TextStyle({
    fontFamily: 'Montserrar',
    fontSize:48,
    fill : 'deepskyblue',
    stroke:'#ffff',
    strokeThickness:4,
    dropShadow: true,
    dropShadowDistance:10,
    dropShadowAngle: Math.PI / 2,
    dropShadowBlur:4,
    dropShadowColor:'#000000'
});

const myText = new PIXI.Text('Hello World!',style);

app.stage.addChild(myText);

myText.text='Text Chnaged!';

myText.style.worldWrap = true;
myText.style.worldWrapWidth = 100;
myText.style.align='center'