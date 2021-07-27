
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
// import Post from "App/Models/Post"
import Category from "App/Models/Category"
import Ws from 'App/Services/Ws'

export default class HomeController {
    /**
     * index
     */
    public async index({view}:HttpContextContract) {
        // const posts =await Post.findOrFail(1)
        // const category = await posts.related('category').query()
        // console.log(category);
        const category = await Category.findOrFail(1)
        const posts = await category.related('posts').query()
        console.log(posts[0].title);
        Ws.io.emit('new:user', { username: 'virk' })

      
        
        return view.render('index')
    }
}
