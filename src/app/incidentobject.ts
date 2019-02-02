export class IncidentObject {
    studentName:string;
    studentID:number;
    type:string;
    time:string;
    location:[number, number];
    description:string;

    constructor(studentName:string, studentID: number, type:string, time:string, location:[number,number], description:string) {
        this.studentName = studentName;
        this.studentID = studentID;
        this.type = type;
        this.time = time;
        this.location = location;
        this.description = description;
    }
}