export class NiceDate 
{
    d:Date;
    private months:Array<string>;

    constructor()
    {
        console.log('NiceDate made');
        this.d = new Date();
        this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    }
}