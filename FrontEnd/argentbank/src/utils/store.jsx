//////////////////////////////////////////////////////////////////////////////
//                             LOCAL STORAGE                                //
//////////////////////////////////////////////////////////////////////////////

/**
 * getValueFromLocalStorage
 * @param   {string}    key       [value name]
 * @return  {string}    key       [value]
 */
export const getValueFromLocalStorage = (key) => localStorage.getItem(key)

/**
 * setValueToLocalStorage description
 * @param   {string}    key       [value name]
 * @param   {string}    value     [value]
 * @return  {object}    storage   [value added to local storage]
 */
export const setValueToLocalStorage = (key, value) =>
  localStorage.setItem(key, value)

/**
 * removeValueFromLocalStorage
 * @param   {string}    key       [value name]
 * @return  {object}    storage   [value removed from local storage]
 */
export const removeValueFromLocalStorage = (key) => localStorage.removeItem(key)

/**
 * clearLocalStorage
 * @param   {string}    key       [value name]
 * @return  {object}    storage   [empty local storage]
 */
export const clearLocalStorage = () => localStorage.clear()

//////////////////////////////////////////////////////////////////////////////
//                             SESSION STORAGE                              //
//////////////////////////////////////////////////////////////////////////////

/**
 * getValueFromLocalStorage
 * @param   {string}    key       [value name]
 * @return  {string}    key       [value]
 */
export const getValueFromSessionStorage = (key) => sessionStorage.getItem(key)

//////////////////////////////////////////////////////////////////////////////
//                  DATA FROM LOCAL || SESSION STORAGE                      //
//////////////////////////////////////////////////////////////////////////////

export const token =
  getValueFromLocalStorage('TOKEN') || getValueFromSessionStorage('TOKEN')

export const user =
  getValueFromLocalStorage('USER') || getValueFromSessionStorage('USER')
