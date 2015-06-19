var TimelineSprite = cc.Sprite.extend({

  ctor: function () {
    this._super();

    var texIcon = cc.textureCache.addImage(res.icon_png);
    this.texIconBatch = new cc.SpriteBatchNode(texIcon);
    this.addChild(this.texIconBatch);

    this.init();
  },
  init: function () {

    this.lbTime = new cc.LabelTTF('倒计时：', 'monospace', 12);
    this.lbTime.x = 20;
    this.lbTime.color = cc.color(248, 224, 112);
    this.addChild(this.lbTime);

    this.timeBg = new cc.Sprite('#line.png');
    this.timeBg.x = 240;
    this.texIconBatch.addChild(this.timeBg);

    this.timeSp = new cc.Sprite('#lineTime.png');
    this.timeSp.x = 65;
    this.timeSp.setScaleX(0);
    this.maxScale = GC.timeline.width / this.timeSp.width;
    this.texIconBatch.addChild(this.timeSp);
  },
  update: function (time) {
    var scale = Math.min(1, time / GC.eachTime) * this.maxScale;
    this.timeSp.setScaleX(scale);
    this.timeSp.x = 65 + this.timeSp.width * scale / 2;
  }
});
