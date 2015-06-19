var MapInfoSprite = cc.Sprite.extend({

  ctor: function (map) {
    this._super();

    this.map = map;

    var texMap = cc.textureCache.addImage(res.map_png);
    this.texMapBatch = new cc.SpriteBatchNode(texMap);
    this.addChild(this.texMapBatch);

    this.init();
  },
  init: function () {

    var frame = '#' + this.map.picName + '.png';
    this.mapBg = new cc.Sprite(frame);
    this.texMapBatch.addChild(this.mapBg);

    this.lbName = new cc.LabelTTF('地图名称：' + this.map.name, 'monospace', 14);
    this.lbName.anchorX = 0;
    this.lbName.x = -70;
    this.lbName.y = -70;
    this.lbName.color = cc.color(248, 224, 112);
    this.addChild(this.lbName);

    this.lbLevel = new cc.LabelTTF('地图难度：' + this.map.level, 'monospace', 14);
    this.lbLevel.anchorX = 0;
    this.lbLevel.x = -70;
    this.lbLevel.y = -100;
    this.lbLevel.color = cc.color(248, 224, 112);
    this.addChild(this.lbLevel);
    //
    //
    //this.timeSp = new cc.Sprite('#lineTime.bmp');
    //this.timeSp.x = 65;
    //this.timeSp.setScaleX(0);
    //this.maxScale = GC.timeline.width / this.timeSp.width;
    //this.addChild(this.timeSp);
  }
});
