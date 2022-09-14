import { Graphics } from "pixi.js";
export class game extends Graphics{
    static stage: any;
    loader: any;
    //const rectangle = new Graphics();
    
    onLoad():void{
        const rectangle = new Graphics(this.loader.resources['rect'].texture);
        rectangle.beginFill(0xAA3388)
        .lineStyle(4,0xFFA00,1)
        rectangle.drawRect(200,200,100,200);
        rectangle.endFill();
        game.stage.addChild(rectangle);
    }
    
}
