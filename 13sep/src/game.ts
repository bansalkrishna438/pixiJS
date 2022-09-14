import {Application, Sprite,Graphics} from 'pixi.js';
import {gsap} from 'gsap';
export class Game extends Application{
    private spin:boolean;
    private sliceAngle = 360/7;
    constructor(opts:any) {
        super(opts);
        this.preload([
            
            {name:'wheel', url:'assets/wheel1.png'},
            {name:'spin',url:'assets/arrow.png'}
           
        ], this.onLoad.bind(this));
    }
    preload(list:any[], cb:()=>{}):void {
        this.loader.add(list);
        this.loader.load(cb);
    }
    onLoad():void {
        const wheel = new Sprite(this.loader.resources['wheel'].texture);
        const spin1 =new Sprite(this.loader.resources['spin'].texture);
        wheel.anchor.set(0.5);
        wheel.x = this.screen.width/2;
        wheel.y = this.screen.height/2;

         spin1.anchor.set(0.5);
         spin1.x=this.screen.width/2+5;
         spin1.y=this.screen.height/2 +10;
         spin1.width=50;
         spin1.height=50;
         
        this.stage.addChild(wheel);

        this.stage.addChild(spin1);

        spin1.interactive = true;
        spin1.buttonMode = true;
        console.log(this.stage);
        spin1.on('pointerup', ()=>{
            let random = Math.floor(Math.random()*7);
            let stopAngle = random * this.sliceAngle;
            gsap.fromTo(spin1,{angle:0},{angle:3600+stopAngle, duration:3, ease:'slow(0.9, 0.9, false)'});
        });
    }
    // const rectangle = new Graphics();
    // rectangle.beginFill(0xAA3388)
    // // .lineStyle(4,0xFFA00,1)
    // rectangle.drawRect(200,200,100,200);
    // rectangle.endFill();
    // this.stage.addChild(rectangle);  
}