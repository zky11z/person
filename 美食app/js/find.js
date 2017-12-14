/*
* @Author: Administrator
* @Date:   2017-12-11 09:49:08
* @Last Modified by:   Administrator
* @Last Modified time: 2017-12-11 09:52:59
*/
/*
* @Author: Administrator
* @Date:   2017-12-07 16:32:30
* @Last Modified by:   Administrator
* @Last Modified time: 2017-12-07 16:33:50
*/
(function (doc, win) {
        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
                if(clientWidth>=540){
                  // 这里的640 取决于设计稿的宽度
                    docEl.style.fontSize = '100px';
                }else{
                    docEl.style.fontSize = 100 * (clientWidth /540) + 'px';
                }
            };

        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        recalc();
    })(document, window);