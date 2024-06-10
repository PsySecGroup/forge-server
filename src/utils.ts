/**
 *
 */
export function asNumber(key: string, defaultValue: number): number {
  return process.env[key] === undefined
    ? defaultValue
    : parseInt(process.env[key])
}

/**
 *
 */
export function asBoolean(key: string, defaultValue: boolean): boolean {
  return process.env[key] === undefined
    ? defaultValue
    : process.env[key] === '1'
}

/**
 *
 */
export function asString(key: string, defaultValue: string): string {
  return process.env[key] === undefined
    ? defaultValue
    : process.env[key]
}
