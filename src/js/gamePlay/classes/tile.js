var Tile = cc.Class.extend({

  ctor: function (position, type) {

    this.position = position;
    this.x = position.x;
    this.y = position.y;
    this.type = type || '001';

  }

});
