export class IncidentObject {
    _id:string;
    studentName:string;
    studentID:number;
    type:string;
    time:string;
    location:[number, number];
    description:string;

    constructor(_id:string,studentName:string, studentID: number, type:string, time:string, location:[number,number], description:string) {
        this._id = _id;
        this.studentName = studentName;
        this.studentID = studentID;
        this.type = type;
        this.time = time;
        this.location = location;
        this.description = description;
    }
}