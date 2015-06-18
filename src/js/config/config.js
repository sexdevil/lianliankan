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
