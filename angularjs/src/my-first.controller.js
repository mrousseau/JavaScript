export class MyFirstController {
    constructor (usersService, Version) {
        this.version = Version;
        this.usersService = usersService;
        usersService.getUsers()
            .then(users => {
                this.users = users;
            });

        this.predicat = 'name';
        this.reverse = false;

        this.newUser = { name: '', age: 18 };

        this._initUser()
    }

    sort(predicat) {
        if (this.predicat === predicat) {
            this.reverse = !this.reverse;
        }
        this.predicat = predicat;
    }

    addUser(form, user) {
        if (form.$invalid) return;
        console.log('controller');
        this.usersService.updateBase(user);


/*
        if (user.id) { // update
            this.UserService.updateUser(user)
        } else { // ajout
            this.UserService.addUser(user)
                .then(user => this.users.push(user));
        }*/
        this._initUser();
        
        /*if (form.$invalid) return;
        let temp = angular.copy(user);
        this.usersService.addUser(temp).then(user => { this.users.push(user);});*/
        /*
                user.name = '';
                form.$setPristine();
        */      
    }

    removeUser(user){
        user.deleted = true;
        console.log(user)
        this.usersService.removeUser(user).then(() => {this.users = this.users.filter(u => u.id !== user.id);});;
    }


    editUser(user) {
        this.user = user;
    }

    cancel() {
        this._initUser();
    }

    _initUser() {
        this.user = { name: '', age: 0 };
    }

}