export class SuperService {
    constructor($timeout) {
        this.$timeout = $timeout;
    }

    getUsers() {
        return this.$timeout(2000)
            .then(() =>  [
                { name: 'un', age: 10 },
                { name: 'deux', age: 20 },
                { name: 'trois', age: 33 },
                { name: 'quatre', age: 42 },
            ]);
    }
}