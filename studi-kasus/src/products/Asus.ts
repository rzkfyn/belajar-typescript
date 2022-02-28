import Laptop from '../modules/BaseLaptop';

export default class Asus<T> extends Laptop<T>{
    constructor(type: T, numeric: boolean, touchButton: boolean){
        super('Asus', type, numeric, touchButton);
    }
}