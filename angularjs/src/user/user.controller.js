export class UserController {
    constructor($routeParams, UserService, $location) {
        this.UserService = UserService;
        this.$location = $location;
        this.UserService.getUser($routeParams.id)
            .then(user => this.user = user);
    }

    saveUser(form, user) {
        if (form.$invalid) return;
        this.UserService.saveUser(user)
            .then(() => this.$location.path('/users'));
    }

}