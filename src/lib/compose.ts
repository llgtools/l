function compose(...funcs: Function[]) {
  if (funcs.length === 0) return (arg: any) => arg;
  if (funcs.length === 1) return funcs[0];

  return funcs.reduce((func1, func2) => (...args: any[]) =>
    func1(func2(...args))
  );
}

export default compose;
