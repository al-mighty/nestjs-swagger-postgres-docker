import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {BcService} from "./bc.service";
import {CreateRoleDto} from "./dto/create-role.dto";
//@ts-ignore
import contract from "truffle-contract";
// import storageArtifact from '../../build/contracts/Storage.json';

@Controller('bc')
export class BcController {
    constructor(private bc: BcService) {}

    @Post()
    create(@Body() dto: any) {
        return this.bc.createRole(dto);
    }

    @Get('/:value')
    getByValue(@Param('value') value: string) {
        return this.bc.getRoleByValue(value);
    }
}
