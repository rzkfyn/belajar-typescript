class User{
    private name: string;
    private age: number;
    public constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    public printData(): string{
        return `Nama : ${this.name}\nUmur: ${this.age}`;
    }
}
const sofyan = new User('Sofyan', 17);

console.log(sofyan.printData());