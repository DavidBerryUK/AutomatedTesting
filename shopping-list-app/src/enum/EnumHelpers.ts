export default class EnumHelpers {
  /**
   * Get an enum value from a code,
   *
   *  const value = EnumHelpers.reverseLookup("D", EnumListSortOrder);
   *  will return EnumListSortOrder.Date
   *
   * @param value         value of the enumeration
   * @param enumObject    enumeration type
   * @returns             enumeration value that matches the selected value
   */
  static reverseLookup = <T extends { [key: string]: U }, U>(value: string, enumObject: T): T[keyof T] | undefined => {
    for (const enumKey in enumObject) {
      if (enumObject.hasOwnProperty(enumKey) && enumObject[enumKey] === value) {
        return enumObject[enumKey];
      }
    }

    return undefined;
  };
}
