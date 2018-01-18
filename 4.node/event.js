/**
 * Created by yuanyuan on 2018/1/14.
 */
function EventEmitter() {
    this.events = {}
}

EventEmitter.prototype.on = EventEmitter.prototype.addEventListener = function (type,listener) {
    if(this.events[type]){
        this.events[type].push(listener)
    }else{
        this.events[type] = [listener]
    }
}

EventEmitter.prototype.emit = function (type,...rest) {
    this.events && this.events[type].forEach(listener=>listener.apply(this,rest))
}

EventEmitter.prototype.once = function (type,...rest) {
    function wrapper(...rest) {
        listener.apply(this,rest)
        this.removeListener(type,wrapper)
    }
    this.on(type,wrapper)
}

EventEmitter.prototype.removeListener = function (type,listener) {
    if(this.events[type]){
        this.events[type] = this.events[type].filter(l=>l!=listener)
    }
}

module.exports = EventEmitter