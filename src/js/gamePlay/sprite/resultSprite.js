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
