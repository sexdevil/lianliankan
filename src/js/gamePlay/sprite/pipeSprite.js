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
