cc.game.onStart = function(){

  //cc.view.adjustViewPort(true);
  //
  //cc.view.setDesignResolutionSize(800, 600, cc.ResolutionPolicy.SHOW_ALL);
  //
  //cc.view.resizeWithBrowserSize(true);

  cc.LoaderScene.preload(g_resources, function () {
    //cc.director.setProjection(cc.Director.PROJECTION_2D);
    cc.director.runScene(new GamePlayScene());
  }, this);
};
cc.game.run();

var GC = GC || {};

GC.GAME_STATE = {
  PLAY: 1,
  OVER: 2
};

GC.winSize = cc.size(800, 600);

GC.h = GC.winSize.height;

GC.w = GC.winSize.width;

GC.w_2 = GC.w / 2;

GC.h_2 = GC.h / 2;

GC.grid = {
  x: 12,
  y: GC.h - 173,
  width: 19,
  height: 11
};

GC.timeline = {
  x: 20,
  y: 22,
  width: 330
};

GC.rest = {
  x: 450,
  y: 22
};

GC.result = {
  x: 300,
  y: 180
};

GC.continueHit = {
  x: 48,
  y: 30,
  time: 3,
  zhangsheng: 15,
  koushao: 30,
  jianjiao: 50
};

GC.type_count = 50;

GC.eachTime = 30;

var maps = {
  map1: {
    name: 'map1',
    level: '简单',
    //Img : "images/maps/map1.gif",　
    //BigImg : "images/maps/map1B.gif",　
    tileNum: 76,
    author: 'zxq',
    path: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, -1, -1, 0, -1, -1, 0, -1, -1, 0, -1, -1, 0, -1, -1, 0, -1, -1, 0],
      [0, -1, -1, 0, -1, -1, 0, -1, -1, 0, -1, -1, 0, -1, -1, 0, -1, -1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, -1, -1, 0, -1, -1, 0, -1, -1, 0, -1, -1, 0, -1, -1, 0, -1, -1, 0],
      [0, -1, -1, 0, -1, -1, 0, -1, -1, 0, -1, -1, 0, -1, -1, 0, -1, -1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, -1, -1, 0, -1, -1, 0, -1, -1, 0, -1, -1, 0, -1, -1, 0, -1, -1, 0],
      [0, -1, -1, 0, -1, -1, 0, -1, -1, 0, -1, -1, 0, -1, -1, 0, -1, -1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, -1, -1, 0, -1, -1, 0, 0, 0, 0, 0, 0, 0]
    ]
  },


  map2: {
    name: "map2",
    level: "简单",
//Img : "images/maps/map2.gif",　
//BigImg : "images/maps/map2B.gif",　
    tileNum: 72,
    author: "zxq",
    path: [
      [-1, -1, -1, 0, -1, 0, 0, 0, -1, -1, 0, 0, -1, 0, -1, 0, -1, -1, -1],
      [0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, -1, 0, -1, 0, -1, 0, 0],
      [0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, -1, 0, -1, 0, -1, -1, -1],
      [0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0],
      [-1, -1, -1, 0, -1, -1, 0, 0, -1, -1, 0, 0, 0, -1, 0, 0, -1, -1, -1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [-1, 0, 0, 0, -1, 0, 0, -1, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 0],
      [0, -1, 0, -1, 0, 0, -1, 0, 0, -1, 0, -1, 0, 0, -1, 0, 0, 0, 0],
      [0, 0, -1, 0, 0, 0, -1, 0, 0, -1, 0, -1, 0, 0, -1, 0, 0, 0, 0],
      [0, 0, -1, 0, 0, 0, -1, 0, 0, -1, 0, -1, 0, 0, -1, 0, 0, 0, 0],
      [0, 0, -1, 0, 0, 0, 0, -1, -1, 0, 0, 0, -1, -1, 0, 0, 0, -1, 0]
    ]
  },

  map3: {
    name: "map3",
    level: "一般",
    tileNum: 96,
    author: "zxq",
    path: [
      [-1, -1, 0, 0, -1, 0, 0, -1, -1, -1, -1, -1, 0, 0, -1, 0, 0, -1, -1],
      [-1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 0, 0, -1, 0, 0, -1, 0, 0, -1],
      [-1, 0, -1, 0, 0, -1, 0, 0, -1, -1, -1, 0, 0, -1, 0, 0, -1, 0, -1],
      [-1, 0, -1, 0, -1, 0, 0, -1, 0, 0, 0, -1, 0, 0, -1, 0, -1, 0, -1],
      [-1, 0, -1, 0, -1, 0, -1, 0, 0, -1, 0, 0, -1, 0, -1, 0, -1, 0, -1],
      [-1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1],
      [-1, 0, -1, 0, -1, 0, -1, 0, 0, -1, 0, 0, -1, 0, -1, 0, -1, 0, -1],
      [-1, 0, -1, 0, -1, 0, 0, -1, 0, 0, 0, -1, 0, 0, -1, 0, -1, 0, -1],
      [-1, 0, -1, 0, 0, -1, 0, 0, -1, -1, -1, 0, 0, -1, 0, 0, -1, 0, -1],
      [-1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 0, 0, -1, 0, 0, -1, 0, 0, -1],
      [-1, -1, 0, 0, -1, 0, 0, -1, -1, -1, -1, -1, 0, 0, -1, 0, 0, -1, -1]
    ]
  },

  map4: {
    name: "map4",
    level: "一般",
    tileNum: 92,
    author: "zxq",
    path: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, -1, -1, -1, -1, -1, 0, -1, -1, -1, -1, -1, 0, 0, 0, 0],
      [0, 0, 0, -1, -1, -1, -1, -1, -1, 0, -1, -1, -1, -1, -1, -1, 0, 0, 0],
      [0, 0, -1, -1, -1, -1, -1, -1, 0, 0, 0, -1, -1, -1, -1, -1, -1, 0, 0],
      [0, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, -1, -1, -1, -1, -1, -1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, -1, -1, -1, -1, -1, -1, 0],
      [0, 0, -1, -1, -1, -1, -1, -1, 0, 0, 0, -1, -1, -1, -1, -1, -1, 0, 0],
      [0, 0, 0, -1, -1, -1, -1, -1, -1, 0, -1, -1, -1, -1, -1, -1, 0, 0, 0],
      [0, 0, 0, 0, -1, -1, -1, -1, -1, 0, -1, -1, -1, -1, -1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
  },

  map5: {
    name: "map5",
    level: "一般",
    tileNum: 102,
    author: "zxq",
    path: [
      [0, 0, 0, -1, -1, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, -1, 0, 0, 0],
      [0, 0, -1, -1, -1, -1, 0, 0, 0, 0, 0, -1, -1, -1, -1, -1, -1, 0, 0],
      [0, -1, -1, -1, -1, -1, -1, 0, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, 0],
      [-1, -1, 0, -1, -1, 0, -1, -1, 0, 0, 0, -1, -1, -1, -1, -1, -1, 0, 0],
      [0, 0, 0, -1, -1, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, -1, 0, 0, 0],
      [0, 0, 0, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, 0, 0, 0, 0],
      [0, 0, -1, -1, -1, -1, 0, 0, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, 0],
      [0, -1, -1, -1, -1, -1, -1, 0, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, 0],
      [-1, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, -1, -1, 0, 0, 0, 0],
      [0, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, -1, -1, 0, 0, 0, 0],
      [0, 0, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, -1, -1, 0, 0, 0, 0]
    ]
  },

  map6: {
    name: "map6",
    level: "一般",
    tileNum: 104,
    author: "zxq",
    path: [
      [-1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1],
      [0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0],
      [-1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1],
      [0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0],
      [-1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1],
      [0, -1, 0, -1, 0, -1, 0, -1, 0, 0, 0, -1, 0, -1, 0, -1, 0, -1, 0],
      [-1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1],
      [0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0],
      [-1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1],
      [0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0],
      [-1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1]
    ]
  },

  map7: {
    name: "map7",
    level: "一般",
    tileNum: 114,
    author: "zxq",
    path: [
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1],
      [0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, -1],
      [0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1],
      [0, -1, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, -1, 0, -1],
      [0, -1, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, -1],
      [0, -1, 0, -1, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, -1, 0, -1],
      [0, -1, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1],
      [0, -1, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, -1],
      [0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1],
      [0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
    ]
  },

  map8: {
    name: "map8",
    level: "困难",
    tileNum: 152,
    author: "zxq",
    path: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0],
      [0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0],
      [0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0],
      [0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0],
      [0, -1, -1, -1, -1, -1, -1, -1, -1, 0, -1, -1, -1, -1, -1, -1, -1, -1, 0],
      [0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0],
      [0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0],
      [0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0],
      [0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
  },

  map9: {
    name: "map9",
    level: "困难",
    tileNum: 150,
    author: "zxq",
    path: [
      [-1, -1, 0, -1, -1, -1, 0, -1, -1, -1, -1, -1, 0, -1, -1, -1, 0, -1, -1],
      [-1, -1, 0, -1, -1, -1, 0, -1, -1, -1, -1, -1, 0, -1, -1, -1, 0, -1, -1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [-1, -1, 0, -1, -1, -1, 0, -1, -1, -1, -1, -1, 0, -1, -1, -1, 0, -1, -1],
      [-1, -1, 0, -1, -1, -1, 0, -1, -1, -1, -1, -1, 0, -1, -1, -1, 0, -1, -1]
    ]
  },

  map10: {
    name: "map10",
    level: "困难",
    tileNum: 122,
    author: "zxq",
    path: [
      [0, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0],
      [0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      [0, 0, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, -1, -1, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0],
      [0, 0, -1, -1, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0],
      [0, 0, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, 0, 0],
      [0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, -1, -1, 0, 0],
      [0, 0, -0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, -1, -1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, 0, 0],
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0],
      [0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0]
    ]
  }
};

var g_maps = [];

for (var i in maps) {
  g_maps.push(maps[i]);
}

var res = {
  background: 'image/gameBg.jpg',
  tiles_png: 'image/tiles.png',
  tiles_plist: 'image/tiles.plist',
  pipe_png: 'image/pipe.png',
  pipe_plist: 'image/pipe.plist',
  boom_png: 'image/boom.png',
  boom_plist: 'image/boom.plist',
  icon_png: 'image/icon.png',
  icon_plist: 'image/icon.plist',
  result_png: 'image/result.png',
  result_plist: 'image/result.plist',
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
  bg_music: 'music/bg.mp3',
  boom_music: 'music/boom.mp3',
  sel_music: 'music/sel.mp3',
  end_music: 'music/end.mp3',
  start_music: 'music/start.mp3',
  zhangsheng_music: 'music/zhangsheng.mp3',
  koushao_music: 'music/koushao.mp3',
  jianjiao_music: 'music/jianjiao.mp3'
  //cake_music: 'music/cake.mp3',

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

var Grid = cc.Class.extend({

  ctor: function (width, height) {

    this.width = width;
    this.height = height;
    this.cells = this.empty();
  }

});

Grid.prototype.empty = function () {
  var cells = [];
  for (var x = 0; x < this.width; x++) {
    var row = cells[x] = [];
    for (var y = 0; y < this.height; y++) {
      row.push(null);
    }
  }
  return cells;
};

Grid.prototype.insertTile = function(tile){
  this.cells[tile.x][tile.y] = tile;
};

Grid.prototype.removeTile = function(tile){
  this.cells[tile.x][tile.y] = null;
};

Grid.prototype.cellOccupied = function (cell) {
  return !!this.cellContent(cell);
};

Grid.prototype.cellContent = function (cell) {
  if (this.withinBounds(cell)) {
    return this.cells[cell.x][cell.y];
  } else {
    return null;
  }
};

Grid.prototype.withinBounds = function (position) {
  return position.x >= 0 && position.x < this.width &&
    position.y >= 0 && position.y < this.height;
};

Grid.prototype.eachCell = function (callback) {
  for (var x = 0; x < this.width; x++) {
    for (var y = 0; y < this.height; y++) {
      callback(this.cells[x][y]);
    }
  }
};


var Tile = cc.Class.extend({

  ctor: function (position, type) {

    this.position = position;
    this.x = position.x;
    this.y = position.y;
    this.type = type || '001';

  }

});

function formatStr(num, length) {
  num = num.toString();
  var len = num.length;
  var delta = length - len;
  while (delta-- > 0) {
    num = '0' + num;
  }
  return num;
}

var GPBackgroundLayer = cc.LayerColor.extend({

  ctor: function (color) {

    this._super(color);

    this.initBackground();

  },

  initBackground: function () {
    var gameBg = new cc.Sprite(res.background);
    gameBg.attr({
      x: GC.w_2,
      y: GC.h_2
    });

    this.addChild(gameBg);

  }
});

var g_GPTouchLayer;

var GPTouchLayer = cc.Layer.extend({
  ctor: function () {
    this._super();

    g_GPTouchLayer = this;

    this.initBatchNode();

    this.initGame();

    this.bindEvent();
  },
  initBatchNode: function () {

    var texTiles = cc.textureCache.addImage(res.tiles_png);
    this.texTilesBatch = new cc.SpriteBatchNode(texTiles);
    this.addChild(this.texTilesBatch);

    var texPipe = cc.textureCache.addImage(res.pipe_png);
    this.texPipeBatch = new cc.SpriteBatchNode(texPipe);
    this.addChild(this.texPipeBatch);

    var texBoom = cc.textureCache.addImage(res.boom_png);
    this.texBoomBatch = new cc.SpriteBatchNode(texBoom);
    this.addChild(this.texBoomBatch);

    var texIcon = cc.textureCache.addImage(res.icon_png);
    this.texIconBatch = new cc.SpriteBatchNode(texIcon);
    this.addChild(this.texIconBatch);

    var texResult = cc.textureCache.addImage(res.result_png);
    this.texResultBatch = new cc.SpriteBatchNode(texResult);
    this.addChild(this.texResultBatch);

  },
  initGame: function () {
    this.grid = new Grid(GC.grid.width, GC.grid.height);

    this.state = GC.GAME_STATE.PLAY;

    cc.audioEngine.playEffect(res.start_music);

    this.spendTime = 0;

    this.continueHit = -1;

    this.maxContinueHit = -1;

    this.initMap();

    this.initTiles();

    if (!this.checkMapResolve()) {
      this.rebuildTiles();
    }

    this.initSelectRect();

    this.addTimeline();

    this.addRest();

    this.scheduleUpdate();

    this.playMusic();

  },
  update: function (dt) {

    if (this.state !== GC.GAME_STATE.PLAY)
      return;

    this.spendTime += dt;
    this.timelineSp && this.timelineSp.update(this.spendTime);
    if (this.spendTime >= GC.eachTime) {
      this.gameOver(false);
    }
  },
  playMusic: function () {
    cc.audioEngine.playMusic(res.bg_music, true);
  },
  stopMusic: function () {
    cc.audioEngine.stopMusic(res.bg_music);
  },
  initSelectRect: function () {

    this.selectNode = new cc.DrawNode();
    this.selectNode.drawRect(cc.p(0, 0), cc.p(31, 35), null, 1, cc.color(0, 0, 0, 255));
    this.selectNode.visible = false;
    this.addChild(this.selectNode, 10);

    this.selectedTileSp = null;
  },
  initMap: function () {
    this.map = g_maps[Math.random() * g_maps.length | 0];
    this.rest = this.map.tileNum;
  },
  initTiles: function () {
    var path = this.map.path;
    var types = this.generateTileTypesByPath(path);
    if (types) {
      for (var i = 0; i < path.length; i++) {
        var row = path[i];
        for (var j = 0; j < row.length; j++) {
          if (row[j] === -1) {
            this.addTile({x: j, y: i}, types.pop());
          }
        }
      }
    }
  },
  generateTileTypesByPath: function (path) {
    if (!path)
      return false;
    var nodes = 0;
    for (var i = 0; i < path.length; i++) {
      var row = path[i];
      for (var j = 0; j < row.length; j++) {
        nodes += -row[j];
      }
    }
    if (nodes % 2) {
      cc.log('map error');
      return false;
    }
    var types = [];
    for (var i = 0; i < nodes / 2; i++) {
      var type = Math.random() * GC.type_count | 0 + 1;
      type = formatStr(type, 3);
      types.push(type);
      types.push(type);
    }
    return types.sort(function () {
      return Math.random() > 0.5 ? -1 : 1;
    });
  },
  addTile: function (position, type) {
    var tile = new Tile(position, type);
    this.grid.insertTile(tile);
    this.createTileSprite(tile);
  },
  createTileSprite: function (tile) {
    var tileSp = new TileSprite(tile);
    tileSp.x = GC.grid.x + tile.x * tileSp.width + tileSp.width / 2;
    tileSp.y = GC.grid.y - tile.y * tileSp.height - tileSp.height / 2;
    this.texTilesBatch.addChild(tileSp);

    var me = this;
    cc.eventManager.addListener({
      event: cc.EventListener.TOUCH_ONE_BY_ONE,
      swallowTouches: true,
      onTouchBegan: function (touch, event) {
        var target = event.getCurrentTarget();
        var locationInNode = target.convertToNodeSpace(touch.getLocation());
        var s = target.getContentSize();
        var rect = cc.rect(0, 0, s.width, s.height);

        if (cc.rectContainsPoint(rect, locationInNode)) {
          return true;
        }
        return false;
      },
      onTouchMoved: function (touch, event) {

      },
      onTouchEnded: function (touch, event) {
        var target = event.getCurrentTarget();

        me.selectTile(target);

      }
    }, tileSp);
  },
  selectTile: function (tileSp) {
    var tile = tileSp.tile;
    var selectedTile = this.selectedTileSp && this.selectedTileSp.tile;
    if (selectedTile) {
      var trace = {};
      if (this.canTwoTileDeleted(tile, selectedTile, trace)) {
        this.playDeleteAnimation(cc.p(tile.x, tile.y), cc.p(selectedTile.x, selectedTile.y), trace);

        this.removeTile(tileSp);
        this.removeTile(this.selectedTileSp);

        this.selectedTileSp = null;
        this.selectNode.visible = false;

        if (this.spendTime < GC.continueHit.time) {
          this.continueHit++;
          if (this.continueHit > this.maxContinueHit) {
            this.maxContinueHit = this.continueHit;
          }
          if (this.continueHit > 0) {
            this.showContinueHit();
            switch (this.continueHit) {
              case GC.continueHit.zhangsheng:
                cc.audioEngine.playEffect(res.zhangsheng_music);
                break;
              case  GC.continueHit.koushao:
                cc.audioEngine.playEffect(res.koushao_music);
                break;
              case GC.continueHit.jianjiao:
                cc.audioEngine.playEffect(res.jianjiao_music);
                break;
            }
          }
        } else {
          this.continueHit = 0;
        }

        this.spendTime = 0;

        this.rest -= 2;
        this.restSp.update(this.rest);

        cc.audioEngine.playEffect(res.boom_music);

        if (!this.checkIsWin() && !this.checkMapResolve()) {
          alert('地图无解');
          this.rebuildTiles();
        }

        return;
      }
    }
    if (tile !== selectedTile) {
      cc.audioEngine.playEffect(res.sel_music);

      this.selectedTileSp = tileSp;

      this.selectNode.visible = true;
      this.selectNode.x = tileSp.x - tileSp.width / 2;
      this.selectNode.y = tileSp.y - tileSp.height / 2;
    }
  },
  canTwoTileDeleted: function (tile, selectedTile, trace) {
    if (!tile || !selectedTile) {
      return false;
    }
    if (tile === selectedTile || tile.type !== selectedTile.type) {
      return false;
    }
    var x1 = tile.x;
    var y1 = tile.y;
    var x2 = selectedTile.x;
    var y2 = selectedTile.y;
    var S = {};
    var T = {};
    S[x1 + "|" + y1] = 0;
    var connerNum = 0;
    while (!S[x2 + "|" + y2] && connerNum < 3) {
      for (var s in S) {
        var pointArr = s.split("|");
        var i = parseInt(pointArr[0]);
        var j = parseInt(pointArr[1]);
        //向左找空点
        for (var m = i - 1; m >= 0; m--) {
          if (this.searchPoint(T, trace, connerNum, m, j, s)) {
            break;
          }
        }
        //向右找空点
        for (var m = i + 1; m < GC.grid.width; m++) {
          if (this.searchPoint(T, trace, connerNum, m, j, s)) {
            break;
          }
        }
        //向上找空点
        for (var n = j - 1; n >= 0; n--) {
          if (this.searchPoint(T, trace, connerNum, i, n, s)) {
            break;
          }
        }
        //向下找空点
        for (var n = j + 1; n < GC.grid.height; n++) {
          if (this.searchPoint(T, trace, connerNum, i, n, s)) {
            break;
          }
        }
      }
      for (var x in T) {
        if (S[x] === undefined) {
          //存储上一轮寻找的空点，作为下一次检索的点
          S[x] = T[x];
        }
      }
      T = {};
      connerNum++;
    }
    return S[x2 + "|" + y2] >= 0;
  },
  searchPoint: function (T, trace, connerNum, x, y, s) {
    if (connerNum < 2) {
      if (!this.grid.cellOccupied(cc.p(x, y))) {
        if (!T[x + "|" + y]) {
          T[x + "|" + y] = connerNum;
          if (trace[x + "|" + y] === undefined) {
            trace[x + "|" + y] = s;
          }
        }
      } else {
        return 1;
      }
    } else {
      if (this.grid.cellOccupied(cc.p(x, y))) {
        if (!T[x + "|" + y]) {
          T[x + "|" + y] = connerNum;
          if (trace[x + "|" + y] == undefined) {
            trace[x + "|" + y] = s;
          }
        }
        return 1;
      }
    }
    return 0;
  },
  removeTile: function (tileSp) {

    this.texTilesBatch.removeChild(tileSp);

    this.grid.removeTile(tileSp.tile);
  },
  playDeleteAnimation: function (source, dest, trace) {
    var target = dest.x + '|' + dest.y;
    var start = source.x + '|' + source.y;
    var keyPoints = [];
    keyPoints.push(dest);
    while (target !== start) {
      target = trace[target];
      var targetX = parseInt(target.split("|")[0]);
      var targetY = parseInt(target.split("|")[1]);
      keyPoints.push(cc.p(targetX, targetY));
    }
    this.playPipeAnimation(keyPoints);
  },
  playPipeAnimation: function (keyPoints) {
    var len = keyPoints.length;
    var direction;
    for (var i = 0; i < len; i++) {
      var current = keyPoints[i];
      var prev = keyPoints[i - 1];
      var next = keyPoints[i + 1];
      if (next) {
        var yMin = Math.min(current.y, next.y);
        var yMax = Math.max(current.y, next.y);
        var xMin = Math.min(current.x, next.x);
        var xMax = Math.max(current.x, next.x);
        if (current.x === next.x) {
          direction = 'col';
        } else {
          direction = 'row';
        }
        if (direction === 'col') {
          for (var j = yMin + 1; j < yMax; j++) {
            this.addPipe(direction, cc.p(current.x, j));
          }
        } else {
          for (var j = xMin + 1; j < xMax; j++) {
            this.addPipe(direction, cc.p(j, current.y));
          }
        }
      }

      if (prev && next) {
        //拐点
        var cornerType = this.getCornerType(direction, prev, current, next);
        this.addCornerPipe(cornerType, cc.p(current.x, current.y));
      } else {
        //初始结束点
        this.addBoom(cc.p(current.x, current.y));
      }

    }

  },
  addPipe: function (direction, position) {
    var pipeSp = new PipeSprite(direction);
    pipeSp.x = GC.grid.x + position.x * 31 + 31 / 2;
    pipeSp.y = GC.grid.y - position.y * 35 - 35 / 2;
    pipeSp.play();
    this.texPipeBatch.addChild(pipeSp);
  },
  getCornerType: function (direction, prev, current, next) {
    //type 0:左上角 1:右上角 2:右下角 3:左下角
    var type = 0;
    if (direction === 'row') {
      if (prev.y < current.y) {
        if (next.x > current.x) {
          type = 3;
        } else {
          type = 2;
        }
      } else {
        if (next.x > current.x) {
          type = 0;
        } else {
          type = 1;
        }
      }
    } else {
      if (prev.x < current.x) {
        if (next.y > current.y) {
          type = 1;
        } else {
          type = 2;
        }
      } else {
        if (next.y > current.y) {
          type = 0;
        } else {
          type = 3;
        }
      }
    }
    return type;
  },
  addCornerPipe: function (conerType, position) {
    var offsetX = 0;
    var offsetY = 0;
    switch (conerType) {
      case 0:
        offsetX = 31 / 4;
        offsetY = 35 / 4;
        break;
      case 1:
        offsetX = -31 / 4;
        offsetY = 35 / 4;
        break;
      case 2:
        offsetX = -31 / 4;
        offsetY = -35 / 4;
        break;
      case 3:
        offsetX = 31 / 4;
        offsetY = -35 / 4;
        break
    }
    var cPipeSp = new PipeSprite('col');

    cPipeSp.setScale(1, 0.5);
    cPipeSp.x = GC.grid.x + position.x * 31 + 31 / 2;
    cPipeSp.y = GC.grid.y - position.y * 35 - 35 / 2 - offsetY;

    cPipeSp.play();
    this.texPipeBatch.addChild(cPipeSp);

    var rPipeSp = new PipeSprite('row');

    rPipeSp.setScale(0.5, 1);
    rPipeSp.x = GC.grid.x + position.x * 31 + 31 / 2 + offsetX;
    rPipeSp.y = GC.grid.y - position.y * 35 - 35 / 2;

    rPipeSp.play();
    this.texPipeBatch.addChild(rPipeSp);
  },
  addBoom: function (position) {
    var boomSp = new BoomSprite();
    boomSp.x = GC.grid.x + position.x * 31 + 31 / 2;
    boomSp.y = GC.grid.y - position.y * 35 - 35 / 2;
    boomSp.play();
    this.texBoomBatch.addChild(boomSp);
  },
  addTimeline: function () {
    this.timelineSp = new TimelineSprite();
    this.timelineSp.x = GC.timeline.x;
    this.timelineSp.y = GC.timeline.y;
    this.texIconBatch.addChild(this.timelineSp);
  },
  addRest: function () {
    this.restSp = new RestSprite(this.rest);
    this.restSp.x = GC.rest.x;
    this.restSp.y = GC.rest.y;
    this.texIconBatch.addChild(this.restSp);
  },
  checkIsWin: function () {
    if (this.texTilesBatch.children.length === 0) {
      this.gameOver(true);
      return true;
    }
    return false;
  },
  checkMapResolve: function () {
    for (var i = 0; i < GC.grid.width; i++) {
      for (var j = 0; j < GC.grid.height; j++) {
        for (var k = 0; k < GC.grid.width; k++) {
          for (var l = 0; l < GC.grid.height; l++) {
            var tile1 = this.grid.cellContent(cc.p(i, j));
            var tile2 = this.grid.cellContent(cc.p(k, l));
            if (this.canTwoTileDeleted(tile1, tile2, {})) {
              return {
                tile1: tile1,
                tile2: tile2
              };
            }
          }
        }
      }
    }
    return false;
  },
  showContinueHit: function () {
    var continueHitSp = new continueHitSprite(this.continueHit, this.maxContinueHit);
    continueHitSp.x = GC.continueHit.x;
    continueHitSp.y = GC.continueHit.y;
    continueHitSp.play();
    this.addChild(continueHitSp);
  },
  rebuildTiles: function () {
    var tmpNode = this.texTilesBatch.children.slice();
    this.texTilesBatch.removeAllChildren();

    tmpNode = tmpNode.sort(function () {
      return Math.random() > 0.5
    });

    var me = this;
    this.grid.eachCell(function (tile) {
      if (tile) {
        me.grid.removeTile(tile);
        me.addTile(tile.position, tmpNode.pop().tile.type);
      }
    });

    if(!this.checkMapResolve()){
      this.rebuildTiles();
    }
  },
  gameOver: function (success) {
    this.state = GC.GAME_STATE.OVER;

    cc.audioEngine.playEffect(res.end_music);

    this.stopMusic();

    var resultSp = new ResultSprite(success);
    resultSp.x = GC.result.x;
    resultSp.y = GC.result.y;
    resultSp.play();
    this.texResultBatch.addChild(resultSp);

    this.texTilesBatch.children.forEach(function (child) {
      cc.eventManager.removeListeners(cc.EventListener.TOUCH_ONE_BY_ONE, child);
    });
  },
  bindEvent: function () {

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

    this.addTouchLayer();
  },

  addCache : function(){

    cc.spriteFrameCache.addSpriteFrames(res.tiles_plist);
    cc.spriteFrameCache.addSpriteFrames(res.pipe_plist);
    cc.spriteFrameCache.addSpriteFrames(res.boom_plist);
    cc.spriteFrameCache.addSpriteFrames(res.icon_plist);
    cc.spriteFrameCache.addSpriteFrames(res.result_plist);

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

var BoomSprite = cc.Sprite.extend({

  ctor: function () {

    var frame = cc.spriteFrameCache.getSpriteFrame('00.png');
    this._super(frame);
  },
  play: function () {
    var animFrames = [];
    for (var i = 0; i < 19; i++) {
      var str = 'boom' + formatStr(i, 2) + '.png';
      var frame = cc.spriteFrameCache.getSpriteFrame(str);
      animFrames.push(frame);
    }
    var animation = new cc.Animation(animFrames, 0.1);

    this.runAction(cc.sequence(
      cc.animate(animation),
      cc.callFunc(this.destroy, this)
    ));

  },

  destroy: function () {
    g_GPTouchLayer.texBoomBatch.removeChild(this);
  }
});

var continueHitSprite = cc.LabelTTF.extend({

  ctor: function (count, maxCount) {
    var str = '连击：' + count + '/' + maxCount;
    this._super(str, 'monospace', 14);
  },
  play: function () {

    var actionMove = cc.moveTo(0.5, cc.p(this.x, this.y + 10));
    var actionFadeIn = cc.fadeOut(1);
    var me = this;
    var seqAction = cc.sequence(actionMove, actionFadeIn, cc.callFunc(function () {
      me.destroy();
    }));
    this.runAction(seqAction);
  },
  destroy: function () {
    g_GPTouchLayer.removeChild(this);
  }
});

var PipeSprite = cc.Sprite.extend({

  ctor: function (direction) {
    this.direction = direction;
    var frame = cc.spriteFrameCache.getSpriteFrame(direction + '00.png');
    this._super(frame);
  },
  play: function () {
    var animFrames = [];
    for (var i = 0; i < 10; i++) {
      var str = this.direction + formatStr(i, 2) + '.png';
      var frame = cc.spriteFrameCache.getSpriteFrame(str);
      animFrames.push(frame);
    }
    var animation = new cc.Animation(animFrames, 0.1);

    this.runAction(cc.sequence(
      cc.animate(animation),
      cc.callFunc(this.destroy, this)
    ));
  },

  destroy: function () {
    g_GPTouchLayer.texPipeBatch.removeChild(this);
  }
});

var RestSprite = cc.Sprite.extend({

  ctor: function (rest) {
    this._super();

    this.rest = rest;

    this.init();
  },
  init: function () {

    this.lb= new cc.LabelTTF('剩余方块：', 'monospace', 12);
    this.lb.x = 20;
    this.lb.color = cc.color(248, 224, 112);
    this.addChild(this.lb);

    this.lbRest = new cc.LabelTTF(this.rest,'monospace', 12);
    this.lbRest.x = 60;
    this.lbRest.color = cc.color(248, 224, 112);
    this.addChild(this.lbRest);

  },
  update: function (rest) {
    this.lbRest.setString(rest);
  }
});

var ResultSprite = cc.Sprite.extend({

  ctor: function (result) {

    var frame = result ? '#win.png' : '#lose.png';
    this._super(frame);
  },
  play: function () {
    var duration = 0.3;
    this.opacity = 100;
    var actionMove = cc.moveTo(duration, cc.p(this.x, this.y + 50));
    var actionFadeIn = cc.fadeIn(duration);
    this.runAction(actionMove);
    this.runAction(actionFadeIn);

  }
});

var TileSprite = cc.Sprite.extend({

  ctor: function (tile) {
    this._super("#img" + tile.type + ".bmp");

    this.tile = tile;
  }
});

var TimelineSprite = cc.Sprite.extend({

  ctor: function () {
    this._super();

    this.init();
  },
  init: function () {

    this.lbTime = new cc.LabelTTF('倒计时：', 'monospace', 12);
    this.lbTime.x = 20;
    this.lbTime.color = cc.color(248, 224, 112);
    this.addChild(this.lbTime);

    this.timeBg = new cc.Sprite('#line.bmp');
    this.timeBg.x = 240;
    this.addChild(this.timeBg);

    this.timeSp = new cc.Sprite('#lineTime.bmp');
    this.timeSp.x = 65;
    this.timeSp.setScaleX(0);
    this.maxScale = GC.timeline.width / this.timeSp.width;
    this.addChild(this.timeSp);
  },
  update: function (time) {
    var scale = Math.min(1, time / GC.eachTime) * this.maxScale;
    this.timeSp.setScaleX(scale);
    this.timeSp.x = 65 + this.timeSp.width * scale / 2;
  }
});
