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
                if(clientWidth>=1080){
                  // 这里的640 取决于设计稿的宽度
                    docEl.style.fontSize = '100px';
                }else{
                    docEl.style.fontSize = 100 * (clientWidth / 1080) + 'px';
                }
            };

        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        recalc();
    })(document, window);