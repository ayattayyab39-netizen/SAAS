import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useMotion } from '../context/MotionContext'

const Blog = () => {
  const { motion: m, pageVariants, pageTransition, staggerContainer, fadeInUp, scaleIn } = useMotion()
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'ai', name: 'AI & Machine Learning' },
    { id: 'product', name: 'Product Updates' },
    { id: 'tutorials', name: 'Tutorials' },
    { id: 'industry', name: 'Industry News' }
  ]

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends to Watch in 2024',
      excerpt: 'Discover the latest AI trends that are reshaping how businesses operate and compete in the digital age.',
      category: 'ai',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      featured: true
    },
    {
      id: 2,
      title: 'How to Implement AI Analytics in Your Business',
      excerpt: 'A step-by-step guide to integrating AI-powered analytics into your existing business processes.',
      category: 'tutorials',
      author: 'Michael Chen',
      date: '2024-01-12',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      featured: false
    },
    {
      id: 3,
      title: 'New Features: Advanced Workflow Automation',
      excerpt: 'Introducing our latest workflow automation features that will revolutionize how you manage tasks.',
      category: 'product',
      author: 'Emily Rodriguez',
      date: '2024-01-10',
      readTime: '3 min read',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      featured: false
    },
    {
      id: 4,
      title: 'The Impact of AI on Small Business Growth',
      excerpt: 'How small businesses can leverage AI technology to compete with larger enterprises.',
      category: 'industry',
      author: 'David Kim',
      date: '2024-01-08',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
      featured: false
    },
    {
      id: 5,
      title: 'Building Custom AI Models: A Developer\'s Guide',
      excerpt: 'Learn how to build and deploy custom AI models using our platform\'s developer tools.',
      category: 'tutorials',
      author: 'Sarah Johnson',
      date: '2024-01-05',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
      featured: false
    },
    {
      id: 6,
      title: 'AI Ethics: Building Responsible Technology',
      excerpt: 'Exploring the importance of ethical AI development and our commitment to responsible innovation.',
      category: 'ai',
      author: 'Emily Rodriguez',
      date: '2024-01-03',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop',
      featured: false
    }
  ]

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  const featuredPost = blogPosts.find(post => post.featured)

  return (
    <m.div
      variants={pageVariants}
      initial="initial"
      animate="in"
      exit="out"
      transition={pageTransition}
    >
      {/* Hero Section */}
      <section className="hero blog-hero">
        <div className="container">
          <m.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="hero-title">AI Insights & Updates</h1>
            <p className="hero-description">
              Stay informed with the latest trends, tutorials, and insights from the world of AI and business automation.
            </p>
          </m.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="featured-post-section">
          <div className="container">
            <m.div 
              className="featured-post"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="featured-post-content">
                <div className="featured-post-image">
                  <img src={featuredPost.image} alt={featuredPost.title} />
                  <div className="featured-badge">Featured</div>
                </div>
                <div className="featured-post-text">
                  <div className="post-meta">
                    <span className="post-category">{categories.find(cat => cat.id === featuredPost.category)?.name}</span>
                    <span className="post-date">{new Date(featuredPost.date).toLocaleDateString()}</span>
                    <span className="post-read-time">{featuredPost.readTime}</span>
                  </div>
                  <h2 className="featured-post-title">{featuredPost.title}</h2>
                  <p className="featured-post-excerpt">{featuredPost.excerpt}</p>
                  <div className="post-author">
                    <span>By {featuredPost.author}</span>
                  </div>
                  <Link to={`/blog/${featuredPost.id}`} className="btn btn-primary">
                    Read More
                  </Link>
                </div>
              </div>
            </m.div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="blog-filter-section">
        <div className="container">
          <m.div 
            className="category-filter"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </m.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="blog-grid-section">
        <div className="container">
          <m.div 
            className="blog-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {filteredPosts.map((post, index) => (
              <m.article 
                key={post.id}
                className="blog-card"
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="blog-card-image">
                  <img src={post.image} alt={post.title} />
                  <div className="blog-card-category">
                    {categories.find(cat => cat.id === post.category)?.name}
                  </div>
                </div>
                <div className="blog-card-content">
                  <div className="blog-card-meta">
                    <span className="blog-card-date">{new Date(post.date).toLocaleDateString()}</span>
                    <span className="blog-card-read-time">{post.readTime}</span>
                  </div>
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <div className="blog-card-author">
                    <span>By {post.author}</span>
                  </div>
                  <Link to={`/blog/${post.id}`} className="blog-card-link">
                    Read More <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </m.article>
            ))}
          </m.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <m.div 
            className="newsletter-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="newsletter-title">Stay Updated</h2>
            <p className="newsletter-description">
              Get the latest AI insights and product updates delivered to your inbox.
            </p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="newsletter-input"
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

export default Blog























