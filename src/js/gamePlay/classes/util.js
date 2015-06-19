function formatStr(num, length) {
  num = num.toString();
  var len = num.length;
  var delta = length - len;
  while (delta-- > 0) {
    num = '0' + num;
  }
  return num;
}


function addClickListener(sprite, callback, context) {
  cc.eventManager.addListener({
    event: cc.EventListener.TOUCH_ONE_BY_ONE,
    swallowTouches: true,
    onTouchBegan: function (touch, event) {
      var target = event.getCurrentTarget();
      var locationInNode = target.convertToNodeSpace(touch.getLocation());
      var s = target.getContentSize();
      var rect = cc.rect(0, 0, s.width, s.height);

      if (cc.rectContainsPoint(rect, locationInNode)) {
        return true;
      }
      return false;
    },
    onTouchMoved: function (touch, event) {

    },
    onTouchEnded: function (touch, event) {
      var target = event.getCurrentTarget();
      callback && callback.call(context, target);
      //me.selectTile(target);
    }
  }, sprite);
}
