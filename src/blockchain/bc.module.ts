import {Module} from '@nestjs/common';
import {BcService} from './bc.service';
import {BcController} from './bc.controller';
import {SequelizeModule} from "@nestjs/sequelize";
// import {Role} from "./bc.model";
import {User} from "../users/users.model";
import {BlockChain} from "./bc.model";

@Module({
  providers: [BcService],
  controllers: [BcController],
  imports: [
    // SequelizeModule.forFeature([])
  ],
  exports: [
    BcService
  ]
})
export class BcModule {}
