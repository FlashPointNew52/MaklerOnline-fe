export class Item {
    id: number;
    address: string;
    house_num: string;
    price: number;
    roomsCount: number;
    floor: number;
    floorsCount: number;
    squareTotal: number

    constructor(address?: string,
                house_num?: string,
                price?: number,
                roomsCount?: number,
                floor?: number,
                floorsCount?: number,
                squareTotal?: number
    ) {
        this.address = address;
        this.price = price;
        this.roomsCount = roomsCount;
        this.house_num = house_num;
        this.floor = floor;
        this.floorsCount = floorsCount;
        this.squareTotal = squareTotal;
    }
}
