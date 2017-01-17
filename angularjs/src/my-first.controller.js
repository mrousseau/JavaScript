export class MyFirstController {
    constructor (SuperService, Version) {

        this.version = Version;

        SuperService.getUsers()
            .then(users => {
                this.users = users;
            });

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