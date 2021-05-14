import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto {
    @ApiProperty({ example: 'ADMIN', description: 'название роли' })
    readonly value: string;
    @ApiProperty({ example: 'решала', description: 'описание' })
    readonly description: string;
}
