export abstract class CRUDRepository<T> {

    private items: T[];

    constructor(items: T[]) {
        this.items = items;

    }

    list() {
        return this.items;
    }

    delete(id: number) {
        this.items = this.items.filter((item: any) => item.id != id);
    }
    
}