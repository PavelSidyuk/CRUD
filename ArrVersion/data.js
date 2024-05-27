let users = [];
let currentId = 1;


module.exports = {
    getUsers: () => users,
    addUser: (user) => {
        user.id = currentId++;
        users.push(user)
    },
    getUserById: (id) => users.find(user => user.id === id),
    updateUser: (id, updatedData) => {
        let userIndex = users.findIndex(user => user.id === id);
        if (userIndex !== -1) {
            users[userIndex] = {...users[userIndex], ...updatedData}
            return users[userIndex];
        }
        return null;
    },
    deleteUser: (id) => {

        let userIndex = users.findIndex(user => user.id === id);
        if (userIndex !== -1) {
            users.splice(userIndex, 1);
            return true;
        } else false;
    }

}
