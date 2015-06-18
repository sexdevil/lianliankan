var PropSprite = cc.Sprite.extend({

  ctor: function (type, count) {

    this.type = type;
    var frame = '#' + type + count + '.png';
    this._super(frame);
  },
  update: function (count) {
    var frame = this.type + count + '.png';
    this.setSpriteFrame(frame);
  }
});
