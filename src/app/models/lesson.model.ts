export class Lesson {
  public id: string; // need to be adjust for number id
  public name: string;
  public knowledge: string; // need to be adjust for lesson question or questines

  constructor(name: string, knowledge: string) {
    this.name = name;
    this.knowledge = knowledge;
    this.id = name;
  }
}
