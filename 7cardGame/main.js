    const game = new PIXI.Application({
        width:innerWidth,
        height:innerHeight,
        backgroundColor:0x3366FF
    });
    document.getElementById('game').append(game.view);
    loadAssets([
        {name:'back',url:'/assets/PC Computer - Solitaire - Cards.png'},
        {name:'front',url:'/assets/stock-photo-grin-icons-set-cartoon-set-of-grin-icons-for-web-isolated-on-white-background-1059963749.jpgg'}
    ])
    const pBar = document.getElementById('bar');
    const pText = document.getElementById('progress');

    function preload(e){
        pBar.style.width = e.progress *4+"%";
        pText.innerText =e.progress+"%";
        if(e.progress === 100){
            document.getElementById('barContainer').style.display='none';
        }
        console.log(e.progress)


    }
    function loadAssets(list,onLoadComplete){
        game.loader.onProgress.add(preload);
        game.loader.add(list)
        .load(onLoadComplete);
    }

    function start(loader,resource){
        console.log('params','arguments');
        //const back= PIXI
    }