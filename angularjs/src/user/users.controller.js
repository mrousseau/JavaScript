export class UsersController {
    constructor (UserService, Version) {
        this.UserService = UserService;
        this.version = Version;
        this.predicat = 'name';
        this.reverse = false;

        this.UserService.getUsers()
            .then(users => this.users = users);
    }

    sort(predicat) {
        if (this.predicat === predicat) {
            this.reverse = !this.reverse;
        }
        this.predicat = predicat;
    }

    deleteUser(user) {
        user.deleted = true;
        this.UserService.deleteUser(user)
            .then(() => {
                this.users = this.users.filter(u => u.id !== user.id);
            });
    }

}