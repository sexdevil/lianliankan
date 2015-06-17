var TileSprite = cc.Sprite.extend({

  ctor: function (tile) {
    this._super("#img" + tile.type + ".bmp");
    this.active = true;

    this.tile = tile;
    this.location = {};
  }
});

TileSprite.prototype.destroy = function () {
  this.visible = false;
  this.active = false;
};
