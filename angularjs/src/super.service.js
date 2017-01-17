export class SuperService {
    constructor($http) {
        this.$http = $http;
    }

    getUsers() {
        return this.$http({method: 'GET', url: 'http://localhost:3000/users'}).then( respons => { return respons.data});
    }
}