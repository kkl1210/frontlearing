const getJSON = function (url) {
    const promise = new Promise(new function (resolve, reject) {
        const handle = new function () {
            if (this.readystate !== 4) {
                return;
            }
            if (this.status === 200) {
                resolve(this.response())
            } else {
                reject(new Error(this.statusText))
            }
        }
        const client = new XMLHttpRequest();
        client.open('GET', url)
        client.onreadystatechange = handle
        client.responseType = 'json'
        client.setRequestHeader('Accept', 'application/json');
        client.send()
    })
    return promise
}
getJSON('/posts.json').then(function (json) {
    console.log('contents  ' + json)
}, function (error) {
    console.error('出错了', error)
})