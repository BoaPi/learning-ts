const simpleOverloadFunctionLesson = (): [string, string] => {
  let output = '';

  // define several function signatures
  function len(x: number[]): number;
  function len(x: string): number;
  function len(x: string | number[]): number {
    return x.length;
  }

  output = `${output}Overloaded - length of string "data" is: ${len('data')}`;
  output = `${output}\nOverloaded - length of array with numbers is: ${len([1, 2, 3, 4, 5, 6, 7, 8])}`;

  // complex function signatures to narrow down correct signature
  function maybe<T>(fnOrP: () => T): T | undefined;
  function maybe<T>(fnOrP: Promise<T>): Promise<T | undefined>;
  function maybe<T>(fnOrP: (() => T) | Promise<T>): T | undefined | Promise<T | undefined> {
    if (typeof fnOrP === 'function') {
      try {
        return fnOrP();
      } catch (_) {
        return undefined;
      }
    }
    return fnOrP.catch(() => undefined);
  }

  (async function () {
    // generic type will be inherit correctly
    const x = maybe(() => 999);
    output = `${output}\nOverloaded signatures results in ${x}`;

    // now with promises
    const y = await maybe(Promise.resolve('123'));
    console.log(`${output}\nOverloaded signatures results in ${y}`);
  })();

  // complex function signatures to group arguments and narrow down
  // possible function calls
  type State = 'pause' | 'running';
  type Board = {
    height: number;
    width: number;
    state: State;
    player: number;
  };

  let board: Board = {
    height: 10,
    width: 10,
    state: 'pause',
    player: 0,
  };

  // possible calls are:
  // 1) key + value + board to update
  // 2) partial board + board to update
  function updateBoard<K extends keyof Board>(updateOrKey: K, boardOrValue: Board[K], board: Board): Board;
  function updateBoard(updateOrKey: Partial<Board>, boardOrValue: Board): Board;
  function updateBoard<K extends keyof Board>(
    updateOrKey: Partial<Board> | K,
    boardOrValue: Board | Board[K],
    board?: Board,
  ): Board {
    if (board) {
      if (typeof updateOrKey === 'string') {
        if (typeof boardOrValue === 'string' || typeof boardOrValue === 'number') {
          return {
            ...board,
            [updateOrKey]: boardOrValue,
          };
        }
      }
    } else {
      if (typeof updateOrKey !== 'string') {
        if (typeof boardOrValue !== 'string' && typeof boardOrValue !== 'number') {
          return {
            ...boardOrValue,
            ...updateOrKey,
          };
        }
      }
    }
    throw 'wrong args';
  }

  board = updateBoard({ state: 'running' }, board);
  output = `${output}\nNew Board update with new state\nNew state is: ${JSON.stringify(board, null, 2)}`;

  board = updateBoard('player', 1, board);
  output = `${output}\nNew Board update with key & value & board\nNew state is: ${JSON.stringify(board, null, 2)}`;

  return ['Overloading Functions', output];
};

export { simpleOverloadFunctionLesson };
