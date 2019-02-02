export class IncidentObject {
    status:boolean;
    studentName:string;
    studentID:number;
    type:string;
    time:string;
    location:[number, number];
    description:string;

    constructor(status: boolean, studentName:string, studentID: number, type:string, time:string, location:[number,number], description:string) {
        this.status = status;
        this.studentName = studentName;
        this.studentID = studentID;
        this.type = type;
        this.time = time;
        this.location = location;
        this.description = description;
    }
}