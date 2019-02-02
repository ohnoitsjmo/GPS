export class IncidentObject {
    status:boolean;
    studentName:string;
    studentID:number;
    studentPhone:number;
    type:string;
    time:string;
    location:[number, number];
    description:string;

    constructor(status: boolean, studentName:string, studentID: number, studentPhone:number, type:string, time:string, location:[number,number], description:string) {
        this.status = status;
        this.studentName = studentName;
        this.studentID = studentID;
        this.studentPhone = studentPhone;
        this.type = type;
        this.time = time;
        this.location = location;
        this.description = description;
    }
}