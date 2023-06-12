import React from 'react'
import { Title } from '../../Title'
import { BlogCard } from '../../Card/BlogCard'

export const HomeBlog = () => {
  return (
    <section>
        <div className="homeSection">
            <Title en="BLOG" title=""/>
            <BlogCard />
            <BlogCard />
            <BlogCard />
        </div>
    </section>
  )
}
