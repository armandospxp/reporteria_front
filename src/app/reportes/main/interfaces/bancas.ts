export interface Banca {
    micro:   DetalleBanca;
    consumo: DetalleBanca;
    debito:  DetalleBanca;
}

export interface DetalleBanca {
    nombre: string;
    valor:  number;
}