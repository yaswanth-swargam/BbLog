import Conf from "../Conf/Conf.js"
import { Client, Account, ID } from "appwrite"

export class AuthService {
  client
  account

  constructor() {
    this.client = new Client()
      .setEndpoint(Conf.appwriteUrl)
      .setProject(Conf.appwriteProjectId)

    this.account = new Account(this.client)
  }

  // Signup + auto login
  async createAccount({ email, password, name }) {
    try {
      const user = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      )

      if (user) {
        // Auto-login after signup
        return await this.login({ email, password })
      }

      return user
    } catch (error) {
      throw error
    }
  }

  // Login
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(
        email,
        password
      )
    } catch (error) {
      throw error
    }
  }

  // Get logged-in user
  async getCurrentUser() {
    try {
      const session= await this.account.getSession('current');
      if(!session) return null;
      return await this.account.get()
    } catch (error) {
      return null
    }
  }

  // Logout (delete all sessions)
  async logout() {
    try {
      await this.account.deleteSessions()
    } catch (error) {
      throw error
    }
  }
}

const authService = new AuthService()
export default authService
