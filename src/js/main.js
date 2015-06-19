cc.game.onStart = function(){

  cc.view.enableRetina(true);

  cc.view.adjustViewPort(true);
  //
  cc.view.setDesignResolutionSize(800, 600, cc.ResolutionPolicy.SHOW_ALL);
  //
  cc.view.resizeWithBrowserSize(true);

  cc.LoaderScene.preload(g_resources, function () {
    //cc.director.setProjection(cc.Director.PROJECTION_2D);
    cc.director.runScene(new GamePlayScene());
  }, this);
};
cc.game.run();
