//餐厅类
function restaurent(args) {
    this.cash = args.cash;
    this.seat = args.seat;
    this.staff = args.staff
    this.hire = function () {}
    this.fire = function () {}

}
//职员类
function staff(args) {
    let args = args
    this.name = args.name
    this.id = args.id
    this.salary = args.salary
    this.work = function () {}
}
//厨师类
let cookAccepter = (function () {
    let cookInstance = null
    //私有？
    function cookClass() {
        // staff.call(this)
        console.log('cook is created')
        this.cookFood =function(menu){
            console.log('cooking   '+menu)
            this.informWaiter
            console.log('informed  waiter')
        }
        this.informWaiter =function(menu){
            let waiter = waiterAccepter.getInstance({name :'a',salary:1000,id:1})
            console.log(waiter)
            waiter.serveFood(menu)
        }

    }
    return {
        name: 'cookClass',
        getInstance: function () {
            if (!cookInstance) {
                cookInstance = new cookClass()
            }
            console.log(cookInstance)
            return cookInstance
        }
    }
})();
//服务员类
let waiterAccepter = (function () {
    let waiterInstance = null
    //私有？
    function waiterClass() {
        // staff.call(this)
        console.log('waiter is created')
        this.order =function(customer){
            customer.order();


        }
        this.informCook= function(arg){
            console.log('imformed cook  ...')
            let cook = cookAccepter.getInstance();
    cook.cookFood(arg)
            // cook.cook(menu)

        }
        this.serveFood =function(arg){
           console.log('serve food...'+arg)

        }
    }
    return {
        name: 'waiterClass',
        getInstance: function () {
            if (!waiterInstance) {
                waiterInstance = new waiterClass()
            }
            console.log(waiterInstance)
            return waiterInstance
        }
    }
})();
//顾客类
function Customer() {
    this.eat = function () {console.log('eatting')}
    this.order = function (arg) {
        console.log('ordered ..')
        let waiter = waiterAccepter.getInstance()
        waiter.informCook(arg)
        return menu
    }
}
//菜单
function menu(args) {
    this.name = args.name
    this.cost = args.cost
    this.price = args.price
}

function main(){
    let customer = new Customer()
    customer.order('123')
    
    
customer.eat()

}

main()