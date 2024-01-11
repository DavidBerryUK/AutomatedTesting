import EnumHttpVerbs from "src/enum/EnumHttpVerbs";
import ShoppingItemModel from "src/models/ShoppingItemModel";

export default function useBaseRepository() {
  const baseUrl = "";

  const getAsync = async (url: string): Promise<any> => {
    return fetchAsync(url, EnumHttpVerbs.Get);
  };

  const postAsync = async (url: string, data: any): Promise<ShoppingItemModel> => {
    return fetchAsync(url, EnumHttpVerbs.Post, data);
  };

  const deleteAsync = async (url: string): Promise<ShoppingItemModel> => {
    return fetchAsync(url, EnumHttpVerbs.Delete);
  };

  /**********************************/
  /* lower level helper functions   */
  /**********************************/

  /**
   * Low level fetch routine used by all functions in the application
   * @param url       endpoint
   * @param method    get/post/put/delete
   * @param body      body json if applicable
   * @returns         response from API
   */
  const fetchAsync = async (url: string, method: EnumHttpVerbs, body?: any): Promise<any> => {
    const fullUrl = `${baseUrl}${url}`;
    try {
      const response = await fetch(fullUrl, createHeaders(method, body));
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error fetching data from ${url}:`, error);
      return null;
    }
  };

  /**
   * Create header for fetch
   * @param method    Get/Post/Put/Delete
   * @param body      json body
   * @returns         well formed fetch options
   */
  const createHeaders = (method: EnumHttpVerbs, body?: any): RequestInit => {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (method === EnumHttpVerbs.Post || method === EnumHttpVerbs.Put) {
      // Add additional headers for POST or PUT requests if needed
    }

    return {
      method,
      cache: "no-cache",
      mode: "cors",
      credentials: "omit",
      headers,
      body: body ? JSON.stringify(body) : undefined,
    };
  };

  return {
    getAsync,
    deleteAsync,
    postAsync,
  };
}
