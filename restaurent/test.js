'use strict'
// 两个独立的对象  a b
//a 和 b 通过门铃进行通信
//先看a 家有没有门  如果有直接通过门铃通讯 如果没有先建们
//看两个单例之间是否通讯
var a = (function (args) {
    var door
    var ahome = function (msg) {
        this.ring = msg;
    }
    var info = {
        sendMessage: function (msg) {
            if (!door) {
                door = new ahome(msg);
            }
            return door
        },
        abc: function () {
            return 'abc'
        }
    }
    return info

})();
var b = {
    aCallb : function(msg){
        var info = a.sendMessage(msg)
        console.log(info.ring)
        info = null

        var abc = a.abc()
        console.log(abc)
    }   
}
b.aCallb('ringring')