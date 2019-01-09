import * as stackTrace from 'stack-trace'

export type StackFrame = {
  readonly file: string,
  readonly func: string,
  readonly line: number,
  readonly column: number
}

export namespace StackFrame {
  export function get () {
    const stackFrame = stackTrace.get()[2]
    return {
      file: stackFrame.getFileName(),
      func: stackFrame.getFunctionName(),
      line: stackFrame.getLineNumber(),
      column: stackFrame.getColumnNumber()
    }
  }
}
