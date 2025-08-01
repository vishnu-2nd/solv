import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Calendar, User, ArrowRight, BookOpen, Download } from 'lucide-react';

export const Research: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filters = ['All', 'Corporate Law', 'IP Law', 'Technology', 'Privacy', 'Taxation', 'Litigation'];

  const articles = [
    {
      id: 1,
      title: 'The Future of AI Governance: Regulatory Frameworks for Artificial Intelligence',
      excerpt: 'An in-depth analysis of emerging regulatory approaches to AI governance across different jurisdictions, examining the balance between innovation and protection.',
      author: 'Dr. Michael Chen',
      date: '2024-01-15',
      category: 'Technology',
      readTime: '8 min read',
      featured: true,
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 2,
      title: 'Cross-Border M&A: Navigating International Regulatory Complexities',
      excerpt: 'Key considerations for multinational transactions, including regulatory approvals, cultural differences, and strategic planning for successful cross-border acquisitions.',
      author: 'Sarah J. Mitchell',
      date: '2024-01-10',
      category: 'Corporate Law',
      readTime: '12 min read',
      featured: true,
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 3,
      title: 'Data Privacy in the Metaverse: Legal Challenges and Opportunities',
      excerpt: 'Exploring the intersection of virtual reality, data protection laws, and user privacy rights in emerging digital environments.',
      author: 'Emily Rodriguez',
      date: '2024-01-08',
      category: 'Privacy',
      readTime: '10 min read',
      featured: false,
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 4,
      title: 'Patent Strategy for Emerging Technologies: A Comprehensive Guide',
      excerpt: 'Best practices for protecting intellectual property in rapidly evolving tech sectors, including blockchain, quantum computing, and biotechnology.',
      author: 'Dr. Michael Chen',
      date: '2024-01-05',
      category: 'IP Law',
      readTime: '15 min read',
      featured: false,
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 5,
      title: 'ESG Compliance: Legal Frameworks for Sustainable Business Practices',
      excerpt: 'Understanding environmental, social, and governance requirements and their impact on corporate strategy and risk management.',
      author: 'James Thompson',
      date: '2024-01-03',
      category: 'Corporate Law',
      readTime: '11 min read',
      featured: false,
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 6,
      title: 'International Tax Planning in a Post-BEPS World',
      excerpt: 'Strategies for multinational corporations to navigate the evolving international tax landscape while maintaining compliance and efficiency.',
      author: 'Sarah J. Mitchell',
      date: '2023-12-28',
      category: 'Taxation',
      readTime: '14 min read',
      featured: false,
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesFilter = selectedFilter === 'All' || article.category === selectedFilter;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const featuredArticles = filteredArticles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold font-serif mb-6">Research & Articles</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Stay informed with our latest insights, analysis, and thought leadership on emerging legal trends and industry developments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-slate-400" />
              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setSelectedFilter(filter)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      selectedFilter === filter
                        ? 'bg-slate-800 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold font-serif text-slate-900 mb-2">Featured Articles</h2>
              <p className="text-slate-600">Essential reading on the most important legal developments</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 group cursor-pointer"
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="bg-slate-800 text-white text-xs px-2 py-1 rounded">
                        {article.category}
                      </span>
                      <span className="text-slate-500 text-sm">{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-slate-600 mb-4">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4 text-slate-400" />
                        <span className="text-sm text-slate-600">{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-slate-400" />
                        <span className="text-sm text-slate-600">
                          {new Date(article.date).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Articles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold font-serif text-slate-900 mb-2">Latest Articles</h2>
            <p className="text-slate-600">Stay current with our ongoing research and analysis</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 group cursor-pointer"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded">
                      {article.category}
                    </span>
                    <span className="text-slate-500 text-sm">{article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>{article.author}</span>
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <BookOpen className="h-12 w-12 mx-auto mb-6 text-slate-300" />
            <h2 className="text-3xl font-bold font-serif mb-4">Stay Informed</h2>
            <p className="text-xl text-slate-300 mb-8">
              Subscribe to our newsletter for the latest legal insights and industry updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-400"
              />
              <button className="bg-white text-slate-900 px-6 py-3 rounded-md font-semibold hover:bg-slate-100 transition-colors inline-flex items-center justify-center space-x-2">
                <span>Subscribe</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};