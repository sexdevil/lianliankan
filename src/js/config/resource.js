var res = {
  background: 'image/gameBg.jpg',
  tiles_png: 'image/tiles.png',
  tiles_plist: 'image/tiles.plist',
  pipe_png: 'image/pipe.png',
  pipe_plist: 'image/pipe.plist',
  boom_png: 'image/boom.png',
  boom_plist: 'image/boom.plist',
  icon_png: 'image/icon.png',
  icon_plist: 'image/icon.plist',
  result_png: 'image/result.png',
  result_plist: 'image/result.plist',
  prop_png: 'image/prop.png',
  prop_plist: 'image/prop.plist',

  bg_music: 'music/bg.mp3',
  boom_music: 'music/boom.mp3',
  sel_music: 'music/sel.mp3',
  end_music: 'music/end.mp3',
  start_music: 'music/start.mp3',
  zhangsheng_music: 'music/zhangsheng.mp3',
  koushao_music: 'music/koushao.mp3',
  jianjiao_music: 'music/jianjiao.mp3',
  flystar_music: 'music/flystar.mp3'

};

var g_resources = [];
for (var i in res) {
  g_resources.push(res[i]);
}
