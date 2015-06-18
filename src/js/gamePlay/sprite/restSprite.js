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
