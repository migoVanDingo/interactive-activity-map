import { api } from "../utility/constants"
export class Requests {
  public static async doGet(endpoint: string) {
    try {
        console.log(api.baseUrl + endpoint)
      const response = await fetch(api.baseUrl + endpoint)

      if (!response.ok) {
        throw new Error("Network response was not ok")
      }

      return await response.json()
    } catch (error) {
      console.error("GET ERROR: ", error)
      throw error // Re-throw the error to handle it outside this function if needed
    }
  }

  public static async doPost(data: any, endpoint: string) {
    try {
      const response = await fetch(api.baseUrl + endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Network response was not ok")
      }

      return await response.json()
    } catch (error) {
      console.error("POST ERROR: ", error)
      throw error // Re-throw the error to handle it outside this function if needed
    }
  }

  public static async doPut(data: any, endpoint: string) {
    try {
      const response = await fetch(api.baseUrl + endpoint, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Network response was not ok")
      }

      return await response.json()
    } catch (error) {
      console.error("PUT ERROR: ", error)
      throw error // Re-throw the error to handle it outside this function if needed
    }
  }

  public static async doPatch(data: any, endpoint: string) {
    try {
      const response = await fetch(api.baseUrl + endpoint, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Network response was not ok")
      }

      return await response.json()
    } catch (error) {
      console.error("PATCH ERROR: ", error)
      throw error // Re-throw the error to handle it outside this function if needed
    }
  }

  public static async doDelete(endpoint: string) {
    try {
      const response = await fetch(api.baseUrl + endpoint, {
        method: "DELETE",
      })

      if (!response.ok) {
        throw new Error("Network response was not ok")
      }

      return await response.json()
    } catch (error) {
      console.error("DELETE ERROR: ", error)
      throw error // Re-throw the error to handle it outside this function if needed
    }
  }
}
