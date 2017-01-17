export class MyFirstController {
    constructor() {
        this.users = [
            { name: 'un', age: 10 },
            { name: 'deux', age: 20 },
            { name: 'trois', age: 33 },
            { name: 'quatre', age: 42 },
        ];
        this.predicat = 'name';
        this.reverse = false;

        this.newUser = { name: '', age: 18 };
    }

    sort(predicat) {
        if (this.predicat === predicat) {
            this.reverse = !this.reverse;
        }
        this.predicat = predicat;
    }

    addUser(form, user) {
        if (form.$invalid) return;

        let temp = angular.copy(user);
        this.users.push(temp);
        user.name = '';
    }
}