export declare class SalesforceID {
    readonly id: string;
    constructor(id: string);
    static validate(id: string): boolean;
    static suffixID18(id: string): string;
}
