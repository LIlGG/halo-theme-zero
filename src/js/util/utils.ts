/**
 * 异步导入模块
 * @param moduleName 
 * @returns 
 */
export const importModule = async (moduleName: string) => {
  return await import(moduleName);
}
