import { Injectable } from '@nestjs/common';
import {CreateRoleDto} from "./dto/create-role.dto";
import {InjectModel} from "@nestjs/sequelize";
// import {Role} from "./bc.model";

@Injectable()
export class BcService {

    constructor(
      // @InjectModel(Role) private roleRepository: typeof Role
    ) {}

    async createRole(dto: CreateRoleDto) {
        // const role = await this.roleRepository.create(dto);
        return {role:15};
    }

    async getRoleByValue(value: string) {
        // const role = await this.roleRepository.findOne({where: {value}})
        return {role:20};
    }

}
