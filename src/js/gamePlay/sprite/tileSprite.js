var TileSprite = cc.Sprite.extend({

  ctor: function (tile) {
    this._super("#img" + tile.type + ".bmp");

    this.tile = tile;
  }
});
