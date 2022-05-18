// TODO: make it work around TS compiler or find another solution
export const filterNotEmpty = <T,>(data: T) => {
  return data !== null && data !== undefined && Boolean(data);
}