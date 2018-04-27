/**
 * This class is used to get additional forms of the date
 * 
 * @author Deriv Diggs
 * @version 1.0
 */

import { MakeOrdinal } from "./MakeOrdinal";

export class NiceDate 
{
    d:Date;
    private ordinalDate:string;
    private month:string;

    makeOrdinal:MakeOrdinal = new MakeOrdinal();

    constructor()
    {
        this.d = new Date();
    }

   /**
    * returns the name of the current month
    */
    public getMonth():string
    {
        let months:Array<string> = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.month = months[this.d.getMonth()];
        return this.month;
    };

    /**
     * returns the current ordinal day
     */
    public getOrdinalDate():string
    {
        let date:string = String(this.d.getDate());
        this.ordinalDate = this.makeOrdinal.getOrdinal(Number(date));   
        return this.ordinalDate;
    }

}