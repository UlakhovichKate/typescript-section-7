// const names: Array<string> = [];
// //names[0].split(' ');
// const promise: Promise<any> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('this is done');
//     }, 2000);
// });
//
// promise.then(data => {
//     data.splice(' ');
// })

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergeObj = merge({name: 'max', hobbies: ['Sports']}, { age: 30});
console.log(mergeObj);

interface  Lengthy {
    length: number;
}

function countAndPrint<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value';
    if (element.length === 1 ) {
        descriptionText = 'got 1 element';
    }
    else if (element.length > 1) {
        descriptionText = 'got ' + element.length + ' elements';
    }
    return [element, descriptionText];
}


console.log(countAndPrint(['sports', 'cooking']));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value: ' + obj[key];
}

extractAndConvert({name: 'Max'}, 'name');

class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return[...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.addItem('Max');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const  objStorage = new DataStorage<object>();
// const maxObj = {name: 'max'};
// objStorage.addItem(maxObj);
// objStorage.addItem({name: 'manu'});
// objStorage.removeItem(maxObj)
//
// console.log(objStorage.getItems());

interface CourseGoal {
    title: string;
    description: string;
    completeUnit: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUnit = date;
    return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Max', 'Anna'];
//names.push('Manu');
//names.pop();
