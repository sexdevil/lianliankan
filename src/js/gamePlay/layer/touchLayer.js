var g_GPTouchLayer;

var GPTouchLayer = cc.Layer.extend({
  ctor: function () {
    this._super();

    g_GPTouchLayer = this;

    this.initBatchNode();

    this.initGame();

    this.bindEvent();
  },
  initBatchNode: function () {

    var texTiles = cc.textureCache.addImage(res.tile_png);
    this.texTilesBatch = new cc.SpriteBatchNode(texTiles);
    this.addChild(this.texTilesBatch);

    var texPipe = cc.textureCache.addImage(res.pipe_png);
    this.texPipeBatch = new cc.SpriteBatchNode(texPipe);
    this.addChild(this.texPipeBatch);

    var texBoom = cc.textureCache.addImage(res.boom_png);
    this.texBoomBatch = new cc.SpriteBatchNode(texBoom);
    this.addChild(this.texBoomBatch);

    var texResult = cc.textureCache.addImage(res.result_png);
    this.texResultBatch = new cc.SpriteBatchNode(texResult);
    this.addChild(this.texResultBatch);

    var texProp = cc.textureCache.addImage(res.prop_png);
    this.texPropBatch = new cc.SpriteBatchNode(texProp);
    this.addChild(this.texPropBatch);

  },
  initGame: function () {
    this.grid = new Grid(GC.grid.width, GC.grid.height);

    this.state = GC.GAME_STATE.PLAY;

    cc.audioEngine.playEffect(res.start_music);

    this.spendTime = 0;

    this.continueHit = -1;

    this.maxContinueHit = -1;

    this.resetCount = GC.reset.count;

    this.compassCount = GC.compass.count;

    this.initMap();

    this.addMapInfo();

    this.initTiles();

    if (!this.checkMapResolve()) {
      this.rebuildTiles();
    }

    this.initSelectRect();

    this.addTimeline();

    this.addRest();

    this.addProps();

    this.scheduleUpdate();

    this.playMusic();

  },
  update: function (dt) {

    if (this.state !== GC.GAME_STATE.PLAY)
      return;

    this.spendTime += dt;
    this.timelineSp && this.timelineSp.update(this.spendTime);
    if (this.spendTime >= GC.eachTime) {
      this.gameOver(false);
    }
  },
  playMusic: function () {
    cc.audioEngine.playMusic(res.bg_music, true);
  },
  stopMusic: function () {
    cc.audioEngine.stopMusic(res.bg_music);
  },
  initSelectRect: function () {

    this.selectNode = new cc.DrawNode();
    this.selectNode.drawRect(cc.p(0, 0), cc.p(31, 35), null, 1, cc.color(0, 0, 0, 255));
    this.selectNode.visible = false;
    this.addChild(this.selectNode, 10);

    this.selectedTileSp = null;
  },
  initMap: function () {
    this.map = g_maps[Math.random() * g_maps.length | 0];
    this.rest = this.map.tileNum;
  },
  initTiles: function () {
    var path = this.map.path;
    var types = this.generateTileTypesByPath(path);
    if (types) {
      for (var i = 0; i < path.length; i++) {
        var row = path[i];
        for (var j = 0; j < row.length; j++) {
          if (row[j] === -1) {
            this.addTile({x: j, y: i}, types.pop());
          }
        }
      }
    }
  },
  generateTileTypesByPath: function (path) {
    if (!path)
      return false;
    var nodes = 0;
    for (var i = 0; i < path.length; i++) {
      var row = path[i];
      for (var j = 0; j < row.length; j++) {
        nodes += -row[j];
      }
    }
    if (nodes % 2) {
      cc.log('map error');
      return false;
    }
    var types = [];
    for (var i = 0; i < nodes / 2; i++) {
      var type = Math.random() * GC.type_count | 0 + 1;
      type = formatStr(type, 3);
      types.push(type);
      types.push(type);
    }
    return types.sort(function () {
      return Math.random() > 0.5 ? -1 : 1;
    });
  },
  addTile: function (position, type) {
    var tile = new Tile(position, type);
    this.grid.insertTile(tile);
    this.createTileSprite(tile);
  },
  createTileSprite: function (tile) {
    var tileSp = new TileSprite(tile);
    tileSp.x = GC.grid.x + tile.x * tileSp.width + tileSp.width / 2;
    tileSp.y = GC.grid.y - tile.y * tileSp.height - tileSp.height / 2;
    this.texTilesBatch.addChild(tileSp);

    var me = this;
    addClickListener(tileSp, function (target) {
      this.selectTile(target);
    }, this);

  },
  selectTile: function (tileSp) {
    var tile = tileSp.tile;
    var selectedTile = this.selectedTileSp && this.selectedTileSp.tile;
    if (selectedTile) {
      var trace = {};
      if (this.canTwoTileDeleted(tile, selectedTile, trace)) {
        this.deleteTwoTiles(tileSp, tile, this.selectedTileSp, selectedTile, trace);
        this.selectedTileSp = null;
        this.selectNode.visible = false;

        return;
      }
    }
    if (tile !== selectedTile) {
      cc.audioEngine.playEffect(res.sel_music);

      this.selectedTileSp = tileSp;

      this.selectNode.visible = true;
      this.selectNode.x = tileSp.x - tileSp.width / 2;
      this.selectNode.y = tileSp.y - tileSp.height / 2;
    }
  },
  canTwoTileDeleted: function (tile, selectedTile, trace) {
    if (!tile || !selectedTile) {
      return false;
    }
    if (tile === selectedTile || tile.type !== selectedTile.type) {
      return false;
    }
    var x1 = tile.x;
    var y1 = tile.y;
    var x2 = selectedTile.x;
    var y2 = selectedTile.y;
    var S = {};
    var T = {};
    S[x1 + "|" + y1] = 0;
    var connerNum = 0;
    while (!S[x2 + "|" + y2] && connerNum < 3) {
      for (var s in S) {
        var pointArr = s.split("|");
        var i = parseInt(pointArr[0]);
        var j = parseInt(pointArr[1]);
        //向左找空点
        for (var m = i - 1; m >= 0; m--) {
          if (this.searchPoint(T, trace, connerNum, m, j, s)) {
            break;
          }
        }
        //向右找空点
        for (var m = i + 1; m < GC.grid.width; m++) {
          if (this.searchPoint(T, trace, connerNum, m, j, s)) {
            break;
          }
        }
        //向上找空点
        for (var n = j - 1; n >= 0; n--) {
          if (this.searchPoint(T, trace, connerNum, i, n, s)) {
            break;
          }
        }
        //向下找空点
        for (var n = j + 1; n < GC.grid.height; n++) {
          if (this.searchPoint(T, trace, connerNum, i, n, s)) {
            break;
          }
        }
      }
      for (var x in T) {
        if (S[x] === undefined) {
          //存储上一轮寻找的空点，作为下一次检索的点
          S[x] = T[x];
        }
      }
      T = {};
      connerNum++;
    }
    return S[x2 + "|" + y2] >= 0;
  },
  searchPoint: function (T, trace, connerNum, x, y, s) {
    if (connerNum < 2) {
      if (!this.grid.cellOccupied(cc.p(x, y))) {
        if (!T[x + "|" + y]) {
          T[x + "|" + y] = connerNum;
          if (trace[x + "|" + y] === undefined) {
            trace[x + "|" + y] = s;
          }
        }
      } else {
        return 1;
      }
    } else {
      if (this.grid.cellOccupied(cc.p(x, y))) {
        if (!T[x + "|" + y]) {
          T[x + "|" + y] = connerNum;
          if (trace[x + "|" + y] == undefined) {
            trace[x + "|" + y] = s;
          }
        }
        return 1;
      }
    }
    return 0;
  },
  deleteTwoTiles: function (tileSp1, tile1, tileSp2, tile2, trace) {
    this.playDeleteAnimation(cc.p(tile1.x, tile1.y), cc.p(tile2.x, tile2.y), trace);

    this.removeTile(tileSp1);
    this.removeTile(tileSp2);

    if (this.spendTime < GC.continueHit.time) {
      this.continueHit++;
      if (this.continueHit > this.maxContinueHit) {
        this.maxContinueHit = this.continueHit;
      }
      if (this.continueHit > 0) {
        this.showContinueHit();
        switch (this.continueHit) {
          case GC.continueHit.zhangsheng:
            cc.audioEngine.playEffect(res.zhangsheng_music);
            break;
          case  GC.continueHit.koushao:
            cc.audioEngine.playEffect(res.koushao_music);
            break;
          case GC.continueHit.jianjiao:
            cc.audioEngine.playEffect(res.jianjiao_music);
            break;
        }
      }
    } else {
      this.continueHit = 0;
    }

    this.spendTime = 0;
    this.timelineSp && this.timelineSp.update(this.spendTime);

    this.rest -= 2;
    this.restSp.update(this.rest);

    cc.audioEngine.playEffect(res.boom_music);

    if (!this.checkIsWin() && !this.checkMapResolve()) {
      alert('地图无解');
      this.rebuildTiles();
    }

  },
  removeTile: function (tileSp) {

    this.texTilesBatch.removeChild(tileSp);

    this.grid.removeTile(tileSp.tile);
  },
  playDeleteAnimation: function (source, dest, trace) {
    var target = dest.x + '|' + dest.y;
    var start = source.x + '|' + source.y;
    var keyPoints = [];
    keyPoints.push(dest);
    while (target !== start) {
      target = trace[target];
      var targetX = parseInt(target.split("|")[0]);
      var targetY = parseInt(target.split("|")[1]);
      keyPoints.push(cc.p(targetX, targetY));
    }
    this.playPipeAnimation(keyPoints);
  },
  playPipeAnimation: function (keyPoints) {
    var len = keyPoints.length;
    var direction;
    for (var i = 0; i < len; i++) {
      var current = keyPoints[i];
      var prev = keyPoints[i - 1];
      var next = keyPoints[i + 1];
      if (next) {
        var yMin = Math.min(current.y, next.y);
        var yMax = Math.max(current.y, next.y);
        var xMin = Math.min(current.x, next.x);
        var xMax = Math.max(current.x, next.x);
        if (current.x === next.x) {
          direction = 'col';
        } else {
          direction = 'row';
        }
        if (direction === 'col') {
          for (var j = yMin + 1; j < yMax; j++) {
            this.addPipe(direction, cc.p(current.x, j));
          }
        } else {
          for (var j = xMin + 1; j < xMax; j++) {
            this.addPipe(direction, cc.p(j, current.y));
          }
        }
      }

      if (prev && next) {
        //拐点
        var cornerType = this.getCornerType(direction, prev, current, next);
        this.addCornerPipe(cornerType, cc.p(current.x, current.y));
      } else {
        //初始结束点
        this.addBoom(cc.p(current.x, current.y));
      }

    }

  },
  addPipe: function (direction, position) {
    var pipeSp = new PipeSprite(direction);
    pipeSp.x = GC.grid.x + position.x * 31 + 31 / 2;
    pipeSp.y = GC.grid.y - position.y * 35 - 35 / 2;
    pipeSp.play();
    this.texPipeBatch.addChild(pipeSp);
  },
  getCornerType: function (direction, prev, current, next) {
    //type 0:左上角 1:右上角 2:右下角 3:左下角
    var type = 0;
    if (direction === 'row') {
      if (prev.y < current.y) {
        if (next.x > current.x) {
          type = 3;
        } else {
          type = 2;
        }
      } else {
        if (next.x > current.x) {
          type = 0;
        } else {
          type = 1;
        }
      }
    } else {
      if (prev.x < current.x) {
        if (next.y > current.y) {
          type = 1;
        } else {
          type = 2;
        }
      } else {
        if (next.y > current.y) {
          type = 0;
        } else {
          type = 3;
        }
      }
    }
    return type;
  },
  addCornerPipe: function (conerType, position) {
    var offsetX = 0;
    var offsetY = 0;
    switch (conerType) {
      case 0:
        offsetX = 31 / 4;
        offsetY = 35 / 4;
        break;
      case 1:
        offsetX = -31 / 4;
        offsetY = 35 / 4;
        break;
      case 2:
        offsetX = -31 / 4;
        offsetY = -35 / 4;
        break;
      case 3:
        offsetX = 31 / 4;
        offsetY = -35 / 4;
        break
    }
    var cPipeSp = new PipeSprite('col');

    cPipeSp.setScale(1, 0.5);
    cPipeSp.x = GC.grid.x + position.x * 31 + 31 / 2;
    cPipeSp.y = GC.grid.y - position.y * 35 - 35 / 2 - offsetY;

    cPipeSp.play();
    this.texPipeBatch.addChild(cPipeSp);

    var rPipeSp = new PipeSprite('row');

    rPipeSp.setScale(0.5, 1);
    rPipeSp.x = GC.grid.x + position.x * 31 + 31 / 2 + offsetX;
    rPipeSp.y = GC.grid.y - position.y * 35 - 35 / 2;

    rPipeSp.play();
    this.texPipeBatch.addChild(rPipeSp);
  },
  addBoom: function (position) {
    var boomSp = new BoomSprite();
    boomSp.x = GC.grid.x + position.x * 31 + 31 / 2;
    boomSp.y = GC.grid.y - position.y * 35 - 35 / 2;
    boomSp.play();
    this.texBoomBatch.addChild(boomSp);
  },
  addTimeline: function () {
    this.timelineSp = new TimelineSprite();
    this.timelineSp.x = GC.timeline.x;
    this.timelineSp.y = GC.timeline.y;
    this.addChild(this.timelineSp);
  },
  addRest: function () {
    this.restSp = new RestSprite(this.rest);
    this.restSp.x = GC.rest.x;
    this.restSp.y = GC.rest.y;
    this.addChild(this.restSp);
  },
  addProps: function () {
    this.resetSp = new PropSprite('reset', this.resetCount);
    this.resetSp.x = GC.reset.x;
    this.resetSp.y = GC.reset.y;

    this.texPropBatch.addChild(this.resetSp);

    addClickListener(this.resetSp, function (target) {
      if (this.resetCount > 0) {
        target.update(--this.resetCount);
        this.rebuildTiles();
        cc.audioEngine.playEffect(res.flystar_music);
      }
    }, this);

    this.compassSp = new PropSprite('compass', this.compassCount);
    this.compassSp.x = GC.compass.x;
    this.compassSp.y = GC.compass.y;

    this.texPropBatch.addChild(this.compassSp);

    addClickListener(this.compassSp, function (target) {
      if (this.compassCount > 0) {
        target.update(--this.compassCount);
        this.autoDelete();
        cc.audioEngine.playEffect(res.flystar_music);
      }
    }, this);

  },
  addMapInfo: function () {
    this.mapInfoSp = new MapInfoSprite(this.map);
    this.mapInfoSp.x = GC.mapInfo.x;
    this.mapInfoSp.y = GC.mapInfo.y;
    this.addChild(this.mapInfoSp);
  },
  checkIsWin: function () {
    if (this.texTilesBatch.children.length === 0) {
      this.gameOver(true);
      return true;
    }
    return false;
  },
  checkMapResolve: function () {
    for (var i = 0; i < GC.grid.width; i++) {
      for (var j = 0; j < GC.grid.height; j++) {
        for (var k = 0; k < GC.grid.width; k++) {
          for (var l = 0; l < GC.grid.height; l++) {
            var tile1 = this.grid.cellContent(cc.p(i, j));
            var tile2 = this.grid.cellContent(cc.p(k, l));
            var trace = {};
            if (this.canTwoTileDeleted(tile1, tile2, trace)) {
              return {
                tile1: tile1,
                tile2: tile2,
                trace: trace
              };
            }
          }
        }
      }
    }
    return false;
  },
  showContinueHit: function () {
    var continueHitSp = new continueHitSprite(this.continueHit, this.maxContinueHit);
    continueHitSp.x = GC.continueHit.x;
    continueHitSp.y = GC.continueHit.y;
    continueHitSp.play();
    this.addChild(continueHitSp);
  },
  rebuildTiles: function () {
    var tmpNode = this.texTilesBatch.children.slice();
    this.texTilesBatch.removeAllChildren();

    tmpNode = tmpNode.sort(function () {
      return Math.random() > 0.5
    });

    var me = this;
    this.grid.eachCell(function (tile) {
      if (tile) {
        me.grid.removeTile(tile);
        me.addTile(tile.position, tmpNode.pop().tile.type);
      }
    });

    if (!this.checkMapResolve()) {
      this.rebuildTiles();
    }
  },
  autoDelete: function () {
    var resolve = this.checkMapResolve();
    var tile1 = resolve.tile1;
    var tile2 = resolve.tile2;
    var trace = resolve.trace;
    var tileSp1 = this.getTileSpByTile(tile1);
    var tileSp2 = this.getTileSpByTile(tile2);
    this.deleteTwoTiles(tileSp1, tile1, tileSp2, tile2, trace);
    if (tileSp1 === this.selectedTileSp || tileSp2 === this.selectedTileSp) {
      this.selectedTileSp = null;
      this.selectNode.visible = false;
    }
  },
  getTileSpByTile: function (tile) {
    var tileSp = null;
    this.texTilesBatch.children.forEach(function (child) {
      if (child.tile === tile) {
        tileSp = child;
        return false;
      }
    });
    return tileSp;
  },
  gameOver: function (success) {
    this.state = GC.GAME_STATE.OVER;

    cc.audioEngine.playEffect(res.end_music);

    this.stopMusic();

    var resultSp = new ResultSprite(success);
    resultSp.x = GC.result.x;
    resultSp.y = GC.result.y;
    resultSp.play();
    this.texResultBatch.addChild(resultSp);

    //cc.eventManager.removeListeners(cc.EventListener.TOUCH_ONE_BY_ONE);

    this.texTilesBatch.children.forEach(function (child) {
      cc.eventManager.removeListeners(child);
    });

    cc.eventManager.removeListeners(this.resetSp);
    cc.eventManager.removeListeners(this.compassSp);

  },
  bindEvent: function () {

  }
});
