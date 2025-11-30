// dynamic gererics.ts



type genericArray<t>= Array<t>






// const friends: string[]= ['Alice', 'Bob', 'Charlie'];
const friends: genericArray<string>= ['Alice', 'Bob', 'Charlie'];

// const rollNumber : number[]= [1, 2, 3, 4, 5];

const rollNumber : genericArray<number>= [1, 2, 3, 4, 5];

// const isilegable: boolean[]= [true, false, true];

const isilegable: genericArray<boolean> = [true, false, true];




// arry of objects
const userList: genericArray<{name:string, age:number}> = [
    {
        name:'john',
        age:25,

    },
    {
        name:'sumaiya',
        age:19,
    }
]







// coordinates



type Coordinates<X, Y> = [X, Y];

const coordinates1: Coordinates<string, string> = ['hello', 'world'];
const coordinates2: Coordinates<number, number> = [20,30];