var ScoreSprite = cc.Sprite.extend({

  ctor: function (score) {
    this._super();

    this.score = score;

    this.init();
  },
  init: function () {

    this.lb= new cc.LabelTTF('当前得分：', 'monospace', 14);
    this.lb.color = cc.color(248, 224, 112);
    this.addChild(this.lb);

    this.lbScore = new cc.LabelTTF(this.score + '','monospace', 14);
    this.lbScore.x = 35;
    this.lbScore.anchorX = 0;
    this.lbScore.color = cc.color(248, 224, 112);
    this.addChild(this.lbScore);

  },
  update: function (score) {
    this.lbScore.setString(score);
  }
});
