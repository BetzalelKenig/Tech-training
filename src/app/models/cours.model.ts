import { Lesson } from './lesson.model';


class Section {
  id: string;
  name: string;
  lessons: Lesson[];

  constructor(name: string, lessons: Lesson[]) {
    this.name = name;
    this.id = name;
    this.lessons = lessons;
  }

}

export class Course {
  public name: string;
  public level: string;
  public imageURL: string;
  public sections: Section[];

  constructor(name: string, level: string, imageUrl: string, sections: Section[]) {
    this.name = name;
    this.level = level;
    this.imageURL = imageUrl;
    this.sections = sections;
  }
}
