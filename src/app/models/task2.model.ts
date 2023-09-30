export class Task2 {

  name: string;
  target:string;
  processes: {
    [key: string]: {
      status: string,
      etc: number,
      progress: number,
      remaining: number
    }
  };
  reports: any;

}
