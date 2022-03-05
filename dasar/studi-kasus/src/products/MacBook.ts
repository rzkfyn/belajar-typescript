import Laptop from '../modules/BaseLaptop';

export default class MacBook<T> extends Laptop<T>{
    constructor(type: T, numeric: boolean, touchButton: boolean){
        super('MacBook', type, numeric, touchButton);
    }
}