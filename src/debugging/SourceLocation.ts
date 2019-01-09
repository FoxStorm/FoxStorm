export class SourceLocation {
  constructor (readonly file: string,
  readonly func: string,
  readonly line: number,
  readonly column: number,
  readonly range?: number[]) {}
}
