import {Application, Sprite,Graphics,Text, Container} from 'pixi.js';
import {gsap} from 'gsap';
export class Game extends Application{
    private spin:boolean;
    private sliceAngle = 360/7;
    private wheelContainer:Container;
    private messageContianer:Container;
    constructor(opts:any) {
        super(opts);
        this.preload([
            
            {name:'wheel', url:'assets/wheel1.png'},
            {name:'spin',url:'assets/arrow.png'}
           
        ], this.onLoad.bind(this));
        this.wheelContainer = new Container();
        this.messageContianer = new Container();
        this.stage.addChild(this.wheelContainer);
        this.stage.addChild(this.messageContianer);
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
         spin1.x=this.screen.width/2 +5;
         spin1.y=this.screen.height/2 +10;
         spin1.width=50;
         spin1.height=50;
         
        this.wheelContainer.addChild(wheel);

        this.wheelContainer.addChild(spin1);

        spin1.interactive = true;
        spin1.buttonMode = true;
        console.log(this.stage);
        spin1.on('pointerup', ()=>{
            let random = Math.floor(Math.random()*7);
            let stopAngle = random * this.sliceAngle;
            gsap.fromTo(spin1,{angle:0},{angle:3600+stopAngle, duration:3, ease:'slow(0.9, 0.9, false)', onComplete:()=>{
                const rectangle = new Graphics();
                rectangle.beginFill(0xffffff)
                rectangle.lineStyle(4,0xffffff);
                rectangle.drawRect(425,90,500,500);
                rectangle.endFill();
                setTimeout(() => {
                    // this.wheelContainer.visible = false;
                    this.messageContianer.addChild(rectangle); 
                    this.pro(random);
                }, 1000);                
            }});  
        });
    }
    pro(random:any):any{
        let arr=[1,2,3,4,5,6];
        const t = new Text("you won "+arr[random]);
        t.anchor.set(0.5);
        t.x=this.screen.width/2;
        t.y=this.screen.height/2;
        console.log(arr[random]);
        setTimeout(() => {
            this.messageContianer.addChild(t);
        }, 500);
        setTimeout(() => {
            this.messageContianer.visible=false;
        }, 3000);
    }   
}