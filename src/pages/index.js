import * as React from "react"
import '../../src/styles/global.css'
import Layout from "../components/layout"
import Seo from "../components/seo"
import PopularPost from "./popular-post"
import AllPosts from "./all-posts"
import SmallPost from "./small-card-posts"
import TagsIndex from "./tags"


const IndexPage = ({ data }) => {

  
  return (
    <Layout>
      <Seo title="Я-Маркетолог"/>
      <div className="pl-40 pr-20">
      <div class="hero bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src="https://scontent-mrs2-2.xx.fbcdn.net/v/t1.6435-9/105050030_3203138083079928_6432069507360259389_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=3cWrBVccW3IAX_-QSws&_nc_ht=scontent-mrs2-2.xx&oh=00_AT_WI8pQGQ1vWd7jIBfA80wEWYH1YBpEthaXUB-ALSpeXQ&oe=62F16AC1" class="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 class="text-5xl font-bold">Я - Маркетолог.</h1>
            <p class="py-6 text-lg pr-10">Уже много лет я веду этот блог. Его цели, темы и стиль повествования менялись бесчисленное количество раз, пока я не осознал, что просто хочу писать. Ради самого себя и для тех, кому это действительно интересно.</p>
            <span className="font-bold">Теги блога</span>
            <TagsIndex />
          </div>
        </div>
      </div>
      
      <div className="lg:flex flex-row">
        <div className="basis-6/12">
          <PopularPost />
        </div>
        <div className="basis-4/12">
           <AllPosts />
        </div>
        <div className="basis-3/12">
           <SmallPost/>
        </div>
    </div>
    </div>
    </Layout>
  )
}


export default IndexPage
