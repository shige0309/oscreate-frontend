import { SectionTitle } from '../../../../components/SectionTitle'
import { BlogCard } from '../../../../components/Card/BlogCard'
import './HomeBlog.css';

export const HomeBlog = () => {
  return (
    <section>
      <SectionTitle en="BLOG" title=""/>
      <div className='c-home-blog'>
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </section>
  )
}
