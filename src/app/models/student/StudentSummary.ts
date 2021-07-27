export class StudentSummary {
  registers: any[];
  hours: number;
  projects: any[];

  constructor(registers: any[], hours: number, projects: any[]) {
    this.registers = registers;
    this.hours = hours;
    this.projects = projects;
  }
}
