

export class Personel {
    static idCounter: number = 0;
    name?: string;
    surname?: string;
    tc: string | undefined;
    id: number = Personel.idCounter++;
    phone: string | undefined;
    address: string | undefined;
    email: string | undefined;
    description?: string;

}
