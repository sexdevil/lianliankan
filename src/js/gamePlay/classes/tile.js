var Tile = cc.Class.extend({

  ctor: function (position, type) {

    this.x = position.x;
    this.y = position.y;
    this.type = type || '001';

  }

});
