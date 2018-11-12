export declare class SFID {
    readonly id: string;
    readonly prefix: string;
    readonly suffix: string;
    constructor(id: string);
    static validate(id: string): boolean;
    static suffix(id: string): string;
}
