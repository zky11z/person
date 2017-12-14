/*
* @Author: Administrator
* @Date:   2017-12-08 00:14:26
* @Last Modified by:   Administrator
* @Last Modified time: 2017-12-08 00:15:27
*/(function (doc, win) {
        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
                if(clientWidth>=639){
                  // 这里的640 取决于设计稿的宽度
                    docEl.style.fontSize = '100px';
                }else{
                    docEl.style.fontSize = 100 * (clientWidth / 639) + 'px';
                }
            };

        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        recalc();
    })(document, window);
