import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useMotion } from '../context/MotionContext'

const BlogPost = () => {
  const { slug } = useParams()
  const { motion: m, pageVariants, pageTransition, fadeInUp, fadeInLeft, fadeInRight } = useMotion()

  // In a real app, you'd fetch this data based on the slug
  const blogPost = {
    id: 1,
    title: 'The Future of AI in Business: Trends to Watch in 2024',
    content: `
      <p>Artificial Intelligence is no longer a futuristic concept—it's a present reality that's transforming how businesses operate, compete, and grow. As we move through 2024, several key trends are emerging that will shape the AI landscape for years to come.</p>

      <h2>The Rise of Generative AI</h2>
      <p>Generative AI has moved beyond simple chatbots to become a powerful tool for content creation, code generation, and creative problem-solving. Businesses are now using these tools to:</p>
      <ul>
        <li>Automate content creation for marketing campaigns</li>
        <li>Generate code and technical documentation</li>
        <li>Create personalized customer experiences</li>
        <li>Accelerate product development cycles</li>
      </ul>

      <h2>AI-Powered Decision Making</h2>
      <p>Companies are increasingly relying on AI to make data-driven decisions. Advanced analytics platforms now provide:</p>
      <ul>
        <li>Real-time insights from complex datasets</li>
        <li>Predictive modeling for business forecasting</li>
        <li>Automated risk assessment and mitigation</li>
        <li>Personalized recommendations for customers</li>
      </ul>

      <h2>Ethical AI and Responsible Innovation</h2>
      <p>As AI becomes more powerful, the focus on ethical development and responsible deployment has intensified. Organizations are prioritizing:</p>
      <ul>
        <li>Transparency in AI decision-making processes</li>
        <li>Bias detection and mitigation strategies</li>
        <li>Privacy-preserving AI techniques</li>
        <li>Sustainable AI development practices</li>
      </ul>

      <h2>Integration and Automation</h2>
      <p>The future belongs to businesses that can seamlessly integrate AI into their existing workflows. This means:</p>
      <ul>
        <li>Low-code/no-code AI platforms for non-technical users</li>
        <li>APIs that make AI capabilities accessible to any application</li>
        <li>Automated workflows that adapt and learn over time</li>
        <li>Cross-platform AI solutions that work everywhere</li>
      </ul>

      <h2>Looking Ahead</h2>
      <p>The businesses that will thrive in the AI era are those that start experimenting now, build ethical frameworks, and focus on solving real problems rather than chasing the latest trends. The future of AI in business is bright, but it requires thoughtful implementation and continuous learning.</p>
    `,
    author: 'Sarah Johnson',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'AI & Machine Learning',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
    tags: ['AI', 'Business', 'Technology', 'Future', 'Innovation']
  }

  const relatedPosts = [
    {
      id: 2,
      title: 'How to Implement AI Analytics in Your Business',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop',
      date: '2024-01-12',
      readTime: '8 min read'
    },
    {
      id: 3,
      title: 'Building Custom AI Models: A Developer\'s Guide',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop',
      date: '2024-01-05',
      readTime: '12 min read'
    },
    {
      id: 4,
      title: 'AI Ethics: Building Responsible Technology',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=300&h=200&fit=crop',
      date: '2024-01-03',
      readTime: '7 min read'
    }
  ]

  return (
    <m.div
      variants={pageVariants}
      initial="initial"
      animate="in"
      exit="out"
      transition={pageTransition}
    >
      {/* Article Header */}
      <section className="article-header">
        <div className="container">
          <m.div 
            className="article-meta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/blog" className="back-to-blog">
              <i className="fas fa-arrow-left"></i>
              Back to Blog
            </Link>
            <div className="article-category">{blogPost.category}</div>
            <div className="article-date-read">
              <span>{new Date(blogPost.date).toLocaleDateString()}</span>
              <span>•</span>
              <span>{blogPost.readTime}</span>
            </div>
          </m.div>

          <m.h1 
            className="article-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {blogPost.title}
          </m.h1>

          <m.div 
            className="article-author"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="author-info">
              <div className="author-avatar">
                <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face" alt={blogPost.author} />
              </div>
              <div className="author-details">
                <span className="author-name">{blogPost.author}</span>
                <span className="author-role">CEO & Founder</span>
              </div>
            </div>
            <div className="article-actions">
              <button className="action-btn">
                <i className="fas fa-share"></i>
                Share
              </button>
              <button className="action-btn">
                <i className="fas fa-bookmark"></i>
                Save
              </button>
            </div>
          </m.div>
        </div>
      </section>

      {/* Article Image */}
      <section className="article-image-section">
        <div className="container">
          <m.div 
            className="article-image"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <img src={blogPost.image} alt={blogPost.title} />
          </m.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="article-content">
        <div className="container">
          <div className="article-wrapper">
            <m.article 
              className="article-body"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div 
                className="article-text"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
              />
            </m.article>

            {/* Article Sidebar */}
            <m.aside 
              className="article-sidebar"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <div className="sidebar-section">
                <h3>Tags</h3>
                <div className="article-tags">
                  {blogPost.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="sidebar-section">
                <h3>Share Article</h3>
                <div className="share-buttons">
                  <button className="share-btn twitter">
                    <i className="fab fa-twitter"></i>
                    Twitter
                  </button>
                  <button className="share-btn linkedin">
                    <i className="fab fa-linkedin"></i>
                    LinkedIn
                  </button>
                  <button className="share-btn facebook">
                    <i className="fab fa-facebook"></i>
                    Facebook
                  </button>
                </div>
              </div>
            </m.aside>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="related-posts-section">
        <div className="container">
          <m.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Related Articles</h2>
            <p className="section-description">
              Continue exploring AI insights and business automation
            </p>
          </m.div>

          <m.div 
            className="related-posts-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {relatedPosts.map((post, index) => (
              <m.article 
                key={post.id}
                className="related-post-card"
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="related-post-image">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="related-post-content">
                  <h3 className="related-post-title">{post.title}</h3>
                  <div className="related-post-meta">
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Link to={`/blog/${post.id}`} className="related-post-link">
                    Read More <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </m.article>
            ))}
          </m.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="newsletter-cta-section">
        <div className="container">
          <m.div 
            className="newsletter-cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Enjoyed this article?</h2>
            <p>Subscribe to our newsletter for more AI insights and business automation tips.</p>
            <form className="newsletter-cta-form">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="newsletter-cta-input"
              />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </m.div>
        </div>
      </section>
    </m.div>
  )
}

export default BlogPost























