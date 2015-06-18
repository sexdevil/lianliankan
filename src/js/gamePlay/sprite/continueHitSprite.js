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
