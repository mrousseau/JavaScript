export class UsersController {
    constructor (UserService, Version, $timeout) {
        this.UserService = UserService;
        this.$timeout = $timeout;
        this.version = Version;
        this.predicat = 'name';
        this.reverse = false;

        this.undo = {};

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
        user.delete = true;

        this.undo[user.id] = this.$timeout(5000);
        this.undo[user.id].then(() => {
            this.users = this.users.filter(u => u.id !== user.id);
            this.UserService.deleteUser(user)
        }, () => {
            user.delete = false;
        });
    }

    cancelDelete(user) {
        this.$timeout.cancel(this.undo[user.id]);
    }

}