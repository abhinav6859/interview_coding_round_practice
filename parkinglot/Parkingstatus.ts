

class ParkingRecord {
    public readonly entrytime: Date;
    public exittime: Date | null ;
    public readonly id:string;
  constructor(
    
    public vehicleid: string,
    public slotid: string,
   

  
  ) {
   
      this.id = crypto.randomUUID()
    this.entrytime=new Date();
    this.exittime=null;
  }


}
export default ParkingRecord;
