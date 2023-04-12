import { UserType } from './types/user.type';
import UserModel from './user.schema'

export class UserService {
    
    constructor(){}

    async create(user: UserType) {
        await UserModel.create(user)
    }

}