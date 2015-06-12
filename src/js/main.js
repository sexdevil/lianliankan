cc.game.onStart = function(){
// Adjust viewport meta
  cc.view.adjustViewPort(true);
// Setup the resolution policy and design resolution size
  cc.view.setDesignResolutionSize(800, 600, cc.ResolutionPolicy.SHOW_ALL);
// The game will be resized when browser size change
  cc.view.resizeWithBrowserSize(true);
//load resources
  //load resources
  cc.LoaderScene.preload(g_resources, function () {
    //cc.director.setProjection(cc.Director.PROJECTION_2D);
    cc.director.runScene(new GamePlayScene());
  }, this);
};
cc.game.run();
