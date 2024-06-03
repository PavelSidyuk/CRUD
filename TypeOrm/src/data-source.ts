import {DataSource} from "typeorm";
import * as path from 'path';
import {User} from './Users'

const databasePath = path.join(__dirname, '..', 'yourdatabase.db');

export const AppDataSource = new DataSource({
    type: 'sqlite',
    database: databasePath,
    synchronize: true,
    entities: [User]
});

export const initDataSource = async () => {
    await AppDataSource.initialize();
    console.log('Initializing...');
}

initDataSource().catch((error)=>{
    console.error('Database connection error:', error);
})