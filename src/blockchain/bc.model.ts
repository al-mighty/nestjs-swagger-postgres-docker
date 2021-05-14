import {BelongsToMany, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";


@Table({tableName: 'bc', createdAt: false, updatedAt: false})
export class BlockChain extends Model<any> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    // @ForeignKey(() => Role)
    // @Column({type: DataType.INTEGER})
    // roleId: number;
    //
    // @ForeignKey(() => User)
    // @Column({type: DataType.INTEGER})
    // userId: number;

}
