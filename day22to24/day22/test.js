var menuArr = [
    [1, "Area1", -1],
    // [2, "Area2", -1],
    [3, "Area1-1", 1],
    [4, "Area1-2", 1],
    // [5, "Area2-1", 2],
    // [6, "Area2-2", 2],
    // [7, "Area1-2-3", 4],
    // [8, "Area2-2-1", 6],
];

function a() {
    let menuObject = {}
    const lv = []
    let obj = {}
    for (let i = 0; i < menuArr.length; i++) {
        //所有节点的key
        lv.push(menuArr[i][0])
        //所有节点的基础对象
        obj[menuArr[i][0]] = {
            "name": menuArr[i][1]
        }
    }
    console.log(lv)
    console.log(JSON.stringify(obj))
    for (let i = menuArr.length - 1; i >= 0; i--) {
        //数组第三个取值
        const thirdValue = menuArr[i][2]
        if (lv.includes(thirdValue)) {
            //存在该节点，需要包装该节点的子节点
            console.log(obj[thirdValue])
            //子对象
            let a = obj[thirdValue]["subMenu"]
            //已有subMenu属性可直接使用否则需要先创建新对象
            if (!a)
                a = {}
            const firstVaule = menuArr[i][0]
            a[firstVaule] = obj[firstVaule]
            //包装该节点成为他的父节点的一个子节点
            obj[thirdValue]["subMenu"] = a
        } else {
            //将循环中封装好的节点赋值给根节点
            menuObject[menuArr[i][0]] = obj[menuArr[i][0]]
        }
    }
    console.log(JSON.stringify(menuObject))
}

a()