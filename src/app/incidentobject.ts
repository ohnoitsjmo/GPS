export class IncidentObject {
    _id:string;
    status:boolean;
    studentName:string;
    studentID:number;
    studentPhone:number;
    type:string;
    time:string;
    location:[number, number];
    description:string;
    comments: string[] = [];

    constructor(_id:string, status: boolean, studentName:string, studentID: number, studentPhone:number, type:string, time:string, location:[number,number], description:string, comments:string[]) {
        this._id = _id;
        this.status = status;
        this.studentName = studentName;
        this.studentID = studentID;
        this.studentPhone = studentPhone;
        this.type = type;
        this.time = time;
        this.location = location;
        this.description = description;
        this.comments = comments;
    }
}