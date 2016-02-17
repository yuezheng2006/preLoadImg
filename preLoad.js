/**
 * Created by yang on 16/2/16.
 */
// 图片预加载
function imgPreload(imgArr, callback) {
    var solvedNum = imgArr.length;
    imgArr.forEach(function (v, i) {
        var img = new Image();
        img.src = v;
        if (img.complete) { //如果图片已经存在于浏览器缓存，直接调用回调函数
            checkSolved();
            return; // 直接返回，不用再处理onload事件
        }
        img.onload = function () {
            checkSolved();
        }
    });

    function checkSolved() {
        solvedNum--;
        if (solvedNum == 0) {
            callback && callback();
        }
    }
}
