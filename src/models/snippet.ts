import { Languages } from './temp-languages.enum';

export class Snippet {
  private title: string;
  private desc: string;
  private code: string;
  private lang: Languages;

  get getTitle(): string {
    return this.title;
  }

  get getDescription(): string {
    return this.desc;
  }

  get getCode(): string {
    return this.code;
  }

  get getLanguage(): Languages {
    return this.lang;
  }

  constructor(title: string, desc: string, code: string, lang: Languages) {
    this.title = title;
    this.desc = desc;
    this.code = code;
    this.lang = lang;
  }
}
