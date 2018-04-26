import { MakeOrdinal } from "./MakeOrdinal";

export class NiceDate 
{
    d:Date;
    private ordinalDate:string;
    private month:string;

    private months:Array<string>;
    makeOrdinal:MakeOrdinal = new MakeOrdinal();

    constructor()
    {
        console.log('NiceDate made');
        this.d = new Date();
        this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    }

   
    public getMonth():string{

        this.month = this.months[this.d.getMonth()];
        return this.month;
    };


    public getOrdinalDate():string
    {
        let date:string = String(this.d.getDate());
        this.ordinalDate = this.makeOrdinal.getOrdinal(Number(date));   
        
        return this.ordinalDate;
    }

}