//promise
function test (resolve,reject){
    var timeout = Math.random()*2
    setTimeout(function(){
        if(timeout<1){
            console.log('call resolve')
            resolve('200 ok')
        }
        else{
            console.log('call reject')
            reject('time in'+timeout+'seconds')
        }
    },timeout*1000)
}

var p1= new Promise(test)
var p2 = p1.then(function(result){
    console.log('success ' +result)
})
var p3 = p2.catch(function(reson){
    console.log('fail ' +reson)
})