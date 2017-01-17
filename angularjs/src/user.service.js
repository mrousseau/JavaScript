const api = 'http://localhost:3000/users';

export class UserService {
    constructor($http,$timeout) {
        this.$http = $http;
        this.$timeout = $timeout;
    }

    getUsers() {
        return this.$http.get(api)
            .then(response =>  response.data);
    }

    addUser(user) {
        return this.$http.post(api, user)
            .then(response =>  response.data);
    }

    removeUser(user) {
        console.log('Dans le service : ' + user);
        
        return this.$timeout(3000)
            .then(() => this.$http.delete(`${ api }/${ user.id }`))
            .then(response =>  response.data);

    }

       updateUser(user) {
        return this.$http.put(`${ api }/${ user.id }`, user)
            .then(response =>  response.data);  
    }


    updateBase(user) {

        console.log('service');
         if (user.id) { 
             // update
            this.updateUser(user)
        } else { // ajout
            this.addUser(user);
        }
    }

}