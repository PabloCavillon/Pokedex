import { IsInt, IsPositive, IsString, Min, MinLength } from "class-validator";

export class CreatePokemonDto {
    @IsString()
    @MinLength(3)
    name: string;
    
    @Min(1)
    @IsInt()
    @IsPositive()
    no: number
}
