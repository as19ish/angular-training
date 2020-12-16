export function DateFormat(propertyKey: string): any {
    return function (target: any, key: string) {        
        Object.defineProperty(target, key, {
            configurable: false,
            get: function(){
                return this[propertyKey].toDateString();
            }
        });
    }
}