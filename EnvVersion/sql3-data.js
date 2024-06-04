const sqlite3 = require('sqlite3').verbose();
require('dotenv').config();

const db = new sqlite3.Database(process.env.USER_DATA);


db.run(`CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY,
            name TEXT NOT NULL,
            age INTEGER NOT NULL)`);

module.exports = {
    async getUsers() {
        try {
            return await new Promise((resolve, reject) => {
                db.all('SELECT * FROM users', [], (err, rows) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(rows)
                    }
                })
            });
        } catch (err) {
            return null
        }
    },
    async addUser(user){
        const listID = await new Promise((resolve,reject)=>{
            db.run('INSERT INTO users (name, age) VALUES  (?,?)', [user.name, user.age], function (err){
                if (err){
                    reject(err)
                }else {
                    resolve(this.changes)
                }
            })

        });
        return { id: listID, ...user}
    },
    async updateUser(id, updatedData){
        const changes = await new Promise((resolve, reject) => {
            console.log(updatedData.name, updatedData.age)
            if(updatedData.name && updatedData.age){
                db.run('UPDATE users SET name = ?, age = ? WHERE id = ?', [updatedData.name, updatedData.age, id], function (err){
                    if (err){
                        reject(err)
                    }else {
                        resolve(this.changes);
                    }
                });
            }else if(updatedData.name && !updatedData.age){
                db.run('UPDATE users SET name = ? WHERE id = ?', [updatedData.name, id], function (err){
                    if (err){
                        reject(err)
                    }else {
                        resolve(this.changes);
                    }
                });
            }else if(!updatedData.name && updatedData.age){
                db.run('UPDATE users SET age = ? WHERE id = ?', [updatedData.age, id], function (err){
                    if (err){
                        reject(err)
                    }else {
                        resolve(this.changes);
                    }
                });
            }else {
                resolve(this.changes);
            }

        });
        if(changes === 0){
            return null
        }else {
            return await this.getUserById(id)
        }
    },
    async deleteUser(id){
        const changes = await new Promise((resolve, reject) => {
            db.run('DELETE FROM users WHERE id = ?', [id], function (err){
                if (err) {
                    reject(err);
                }else {
                    resolve(this.changes)
                }
            });
        });
        return changes > 0;
    },
    async getUserById(id){
        const user  = await new Promise((resolve,reject)=>{
            db.get('SELECT * FROM users WHERE id = ?', [id], (err, rows) => {
                if (err) {
                    reject(err);
                }else {
                    resolve(rows)
                }
            })
        });
        return user
    }
}
