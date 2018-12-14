/**
 * Created by yuan on 2018/12/14.
 */
function arrange(name) {
    function wait(s) {
        return new Promise(resolve => {
            setTimeout(() => {
                console.log(`等待 ${s}秒`);
                resolve();
            }, s * 1000);
        });
    }

    return {
        wait(time) {
            this.waitTime = time;
            return this;
        },
        waitFirst(time) {
            this.waitFirstTime = time;
            return this;
        },
        do(something) {
            this.task = something;
            return this;
        },
        async execute() {
            this.waitFirstTime && (await wait(this.waitFirstTime));
            console.log(`William is notified`);
            this.waitTime && (await wait(this.waitTime))
            this.task && console.log(`Start to ${this.task}`);
        }
    };
}

//console.log(arrange('William').do('commit').execute());
console.log(arrange('William').waitFirst(5).do('push').execute());
/*
console.log(arrange('William').wait(5).do('commit').execute());
*/
//console.log(arrange('William').execute());