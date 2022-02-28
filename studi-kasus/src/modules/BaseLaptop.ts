import ILaptop  from './ILaptop';
import {a, b} from './Keyboard';

export default class BaseLaptop<T> implements ILaptop<T>{
    name: string;
    type: T;
    withNumeric: boolean;
    withTouchButton: boolean;

    public constructor(
        name: string,
        type: T,
        withNumeric: boolean,
        withtouchButton: boolean
    ) {
        this.name = name;
        this.type = type;
        this.withNumeric = withNumeric;
        this.withTouchButton = withtouchButton;
    }

    public a(): void{
        console.log(a());
    }

    public b(): void{
        console.log(b());
    }
}