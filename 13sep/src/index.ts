import { Application, Graphics } from 'pixi.js';
import { Game } from './Game';
import { shapes} from './app';
import './css/main.css';
window.onload = ()=>{
    const gameDiv:HTMLDivElement = <HTMLDivElement>document.getElementById('game');
    const app:Application = new Game({
        width:innerWidth,
        height:innerHeight,
        //resizeTo: gameDiv,
        backgroundColor: 0x996633,
        sharedLoader: true,
        sharedTicker: true
    });
    gameDiv.appendChild(app.view);
    const appDiv:HTMLDivElement =<HTMLDivElement>document.getElementById('shapes);
    // const shapes1:Graphics=new shapes1({
        
    })
}