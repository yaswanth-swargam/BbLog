import Conf from "../Conf/Conf";
import {Client,Databases,Storage,ID,Query}  from 'appwrite'


export class Service{
    client
    databases
    storage 

    constructor(){
        this.client=new Client()
        .setEndpoint(Conf.appwriteUrl)
        .setProject(Conf.appwriteProjectId)

        this.databases=new Databases(this.client)
        this.storage=new Storage(this.client)
    }


    //posts

    async createPost({ title, slug, content, featuredImage, status, userId }) {
  try {
    return await this.databases.createDocument(
      Conf.appwriteDatabaseId,
      Conf.appwriteCollectionId,
      slug,
      {
        title,
        content,
        featuredImage,
        status,
        userId, // ✅ now defined
      }
    )
  } catch (e) {
    console.log("create post Error: ", e);
    throw e;
  }
}



    //update post


    async updatePost(slug,{title,content,featuredImage,status}){
        try{
            return await this.databases.updateDocument(
                Conf.appwriteDatabaseId,
                Conf.appwriteCollectionId,
                slug,
                {
                    title,content,featuredImage,status
                }
            )
        }
        catch(e){
            console.log("update Post error: ",e);
            throw e;
            
        }
    }


    async deletePost(slug){
        try{
            await this.databases.deleteDocument(
                Conf.appwriteDatabaseId,
                Conf.appwriteCollectionId,
                slug
            )
            return true
        }
        catch(e){
            console.log("delte error: ",e);
            return false
            
        }
    }


    async getPost(slug){
        try{
            return await this.databases.getDocument(
                Conf.appwriteDatabaseId,
                Conf.appwriteCollectionId,
                slug
            )
        }
        catch(e){
            console.log('couldnt get post',e);
            return null
        }
    }

    async getPosts(
        queries=[Query.equal('status','active')]
    ){
    

    try{
        return await this.databases.listDocuments(
            Conf.appwriteDatabaseId,
            Conf.appwriteCollectionId,
            queries
        )
    }
    
        catch(e){
        console.log(e);
        return null
        
    }
    }



    //storage

    async uploadFile(file){
        try{
            return await this.storage.createFile(
                Conf.appwriteBucketId,
                ID.unique(),
                file
            )
        }
        catch(e){
            console.log(e);
            return null
            
        }
    }


    async deleteFile(fileId){
        try{
            await this.storage.deleteFile(
                Conf.appwriteBucketId,
                fileId,
            )
            return true
        }
        catch(e){
            throw e
        }
    }

getFilePreview(fileId){
    return this.storage.getFilePreview(
        Conf.appwriteBucketId,
        fileId
    )
}
    
}


const service = new Service()

export default service;