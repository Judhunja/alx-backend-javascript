namespace Subjects {
    export interface Teacher {
        experienceTeachingReact?: number;
    }
    export class React extends Subject {
        getRequirements() {
            return 'Here is the list of requirements for React';
        }
        getAvailableTeacher() {
            if (this.teacher.experienceTeachingReact ?? 0 === 0) {
                return 'No available teacher';
            } else {
            return `Available Teacher: ${this.teacher.firstName}`;
            }
        }
    }
}       
