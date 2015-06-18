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
