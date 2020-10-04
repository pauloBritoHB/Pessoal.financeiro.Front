import { Usuario } from './Usuario';

export interface ResultUsuario {
    data: Usuario[];
    isError: boolean;
    message: string[];
}