cc.game.onStart = function(){
// Adjust viewport meta
  cc.view.adjustViewPort(true);
// Setup the resolution policy and design resolution size
  cc.view.setDesignResolutionSize(800, 600, cc.ResolutionPolicy.SHOW_ALL);
// The game will be resized when browser size change
  cc.view.resizeWithBrowserSize(true);
//load resources
  //load resources
  cc.LoaderScene.preload(g_resources, function () {
    //cc.director.setProjection(cc.Director.PROJECTION_2D);
    cc.director.runScene(new GamePlayScene());
  }, this);
};
cc.game.run();

var GC = GC || {};

//屏幕尺寸
GC.winSize = cc.size(800, 600);

GC.h = GC.winSize.height;

GC.w = GC.winSize.width;

GC.w_2 = GC.w / 2;

GC.h_2 = GC.h / 2;

var res = {
  background: 'image/gameBg.jpg'
  //rabbit_small_plist: 'image/rabbit-small.plist',
  //rabbit_small_png: 'image/rabbit-small.png',
  //rabbit_big_plist: 'image/rabbit-big.plist',
  //rabbit_big_png: 'image/rabbit-big.png',
  //rabbit_win_plist: 'image/rabbit-win.plist',
  //rabbit_win_png: 'image/rabbit-win.png',
  //rabbit_lose_plist: 'image/rabbit-lose.plist',
  //rabbit_lose_png: 'image/rabbit-lose.png',
  //icons_plist: 'image/icons.plist',
  //icons_png: 'image/icons.png',
  //explosion_plist: 'image/explosion.plist',
  //explosion_png: 'image/explosion.png',
  //background: 'image/background.jpg',
  //
  //bg_music: 'music/gamebg.mp3',
  //cake_music: 'music/cake.mp3',
  //boom_music: 'music/boom.mp3',
  //win_music: 'music/win.mp3',
  //lose_music: 'music/lose.mp3',
  //lessboom_music: 'music/lessboom.mp3',
  //clock_music: 'music/clock.mp3',
  //life_music: 'music/life.mp3',
  //basket_music: 'music/basket.mp3',
  //jump_music: 'music/jump.mp3'
};

var g_resources = [];
for (var i in res) {
  g_resources.push(res[i]);
}

var GPBackgroundLayer = cc.LayerColor.extend({

  ctor: function (color) {

    this._super(color);

    this.initBackground();

  },

  initBackground: function () {
    var sptBg = new cc.Sprite(res.background);
    sptBg.attr({
      x: GC.w_2,
      y: GC.h_2
    });
    this.addChild(sptBg);
  }
});

var GamePlayScene  = cc.Scene.extend({
  onEnter:function () {
    this._super();

    var layer = new GamePlayLayer();
    this.addChild(layer);

  }
});

var GamePlayLayer = cc.Layer.extend({

  backgroundLayer : null,
  touchLayer : null,
  ctor : function(){
    this._super();

    this.addCache();

    this.addBackgroundLayer();

    //this.addTouchLayer();
  },

  addCache : function(){

    //将plist添加到缓存
    //cc.spriteFrameCache.addSpriteFrames(res.rabbit_small_plist);
    //cc.spriteFrameCache.addSpriteFrames(res.rabbit_big_plist);
    //cc.spriteFrameCache.addSpriteFrames(res.rabbit_win_plist);
    //cc.spriteFrameCache.addSpriteFrames(res.rabbit_lose_plist);
    //cc.spriteFrameCache.addSpriteFrames(res.icons_plist);
    //cc.spriteFrameCache.addSpriteFrames(res.explosion_plist);
  },


  addBackgroundLayer : function(){

    this.backgroundLayer = new GPBackgroundLayer();
    this.addChild(this.backgroundLayer);
  },

  addTouchLayer : function(){
    this.touchLayer = new GPTouchLayer();
    this.addChild(this.touchLayer);
  }
});
