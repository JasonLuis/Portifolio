export namespace Helper {
  export class Capitalize {
    private input: string;

    get value(): string {
      return this.input;
    }

    constructor(input: string) {
      this.input = input;
    }

    public static create(input: string): Capitalize {
      const s = input;
      const capitalized = s.charAt(0).toUpperCase() + s.slice(1);
      return new Capitalize(capitalized);
    }
  }

  export class IsStringEmpty {
    private status: boolean;

    get value(): boolean {
      return this.status;
    }

    constructor(status: boolean) {
      this.status = status;
    }

    public static create(input: string): IsStringEmpty {
      const s = input;
      const status =
        s === '' || s === null || s === undefined || s.trim().length <= 0;
      return new IsStringEmpty(status);
    }
  }
}
