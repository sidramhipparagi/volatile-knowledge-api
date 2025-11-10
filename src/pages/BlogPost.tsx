import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link, useParams } from "react-router-dom";
import veLogo from "@/assets/vE_logo.png";
import apiFeatureImage from "@/assets/api-feature-illustration.jpg";

const blogPosts = {
  "ai-integration-guide": {
    title: "Complete Guide to AI API Integration",
    date: "March 15, 2024",
    image: apiFeatureImage,
    content: `
      <p class="mb-6">Integrating AI capabilities into your applications has never been easier. In this comprehensive guide, we'll walk you through everything you need to know about implementing AI-powered features using modern APIs.</p>
      
      <h2 class="text-2xl font-medium mb-4 mt-8">Getting Started</h2>
      <p class="mb-6">The first step in any AI integration is understanding your use case. Whether you're building a chatbot, image recognition system, or content generator, the approach remains similar. Start by identifying the specific AI capability you need.</p>
      
      <h2 class="text-2xl font-medium mb-4 mt-8">Authentication and Setup</h2>
      <p class="mb-6">Most AI APIs require authentication via API keys. Store these securely using environment variables and never commit them to version control. Our platform provides built-in security features to help you manage credentials safely.</p>
      
      <h2 class="text-2xl font-medium mb-4 mt-8">Making Your First API Call</h2>
      <p class="mb-6">Once authenticated, making API calls is straightforward. Use standard HTTP methods with proper headers and request bodies. Our documentation provides code examples in multiple programming languages to get you started quickly.</p>
      
      <h2 class="text-2xl font-medium mb-4 mt-8">Best Practices</h2>
      <p class="mb-6">Always implement error handling, rate limiting, and response validation. Monitor your API usage and set up alerts for unusual patterns. Consider implementing caching strategies to optimize performance and reduce costs.</p>
    `
  },
  "building-scalable-apis": {
    title: "Building Scalable APIs: Best Practices",
    date: "March 10, 2024",
    image: apiFeatureImage,
    content: `
      <p class="mb-6">Scalability is crucial for modern applications. This guide covers essential practices for building APIs that can handle millions of requests without breaking a sweat.</p>
      
      <h2 class="text-2xl font-medium mb-4 mt-8">Architecture Fundamentals</h2>
      <p class="mb-6">A well-architected API starts with proper design decisions. Use stateless operations, implement proper caching strategies, and design for horizontal scaling from day one.</p>
      
      <h2 class="text-2xl font-medium mb-4 mt-8">Performance Optimization</h2>
      <p class="mb-6">Optimize database queries, implement connection pooling, and use CDNs for static content. Every millisecond counts when you're serving millions of requests.</p>
      
      <h2 class="text-2xl font-medium mb-4 mt-8">Monitoring and Metrics</h2>
      <p class="mb-6">You can't improve what you don't measure. Implement comprehensive monitoring, track key metrics, and set up alerting for critical thresholds.</p>
      
      <h2 class="text-2xl font-medium mb-4 mt-8">Load Balancing</h2>
      <p class="mb-6">Distribute traffic across multiple servers to ensure reliability and performance. Implement health checks and automatic failover mechanisms.</p>
    `
  },
  "api-security-essentials": {
    title: "API Security Essentials for 2024",
    date: "March 5, 2024",
    image: apiFeatureImage,
    content: `
      <p class="mb-6">Security should never be an afterthought. This guide covers the essential security practices every API developer needs to implement in 2024.</p>
      
      <h2 class="text-2xl font-medium mb-4 mt-8">Authentication Methods</h2>
      <p class="mb-6">Choose the right authentication method for your use case. OAuth 2.0, JWT tokens, and API keys each have their place. Understand when to use each.</p>
      
      <h2 class="text-2xl font-medium mb-4 mt-8">Rate Limiting</h2>
      <p class="mb-6">Protect your API from abuse with proper rate limiting. Implement both per-user and global limits to ensure fair usage and prevent DDoS attacks.</p>
      
      <h2 class="text-2xl font-medium mb-4 mt-8">Data Encryption</h2>
      <p class="mb-6">Always use HTTPS for API communications. Encrypt sensitive data at rest and implement proper key management strategies.</p>
      
      <h2 class="text-2xl font-medium mb-4 mt-8">Input Validation</h2>
      <p class="mb-6">Never trust user input. Validate and sanitize all incoming data to prevent injection attacks and ensure data integrity.</p>
    `
  }
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug as keyof typeof blogPosts] : null;

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="max-w-4xl mx-auto px-6 py-32">
          <h1 className="text-4xl font-medium mb-6 text-black">Blog post not found</h1>
          <Link to="/" className="text-black underline">Return to home</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const otherPosts = Object.entries(blogPosts)
    .filter(([key]) => key !== slug)
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <article className="max-w-4xl mx-auto px-6 py-32">
        {/* Hero Image */}
        <div className="mb-8 aspect-video overflow-hidden bg-muted">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-medium mb-8 text-black">
          {post.title}
        </h1>

        {/* Author and Date */}
        <div className="flex items-center justify-between mb-12 pb-8 border-b border-black">
          <div className="flex items-center gap-3">
            <img 
              src={veLogo} 
              alt="Volatile Engine" 
              className="h-10 w-10 rounded-full"
            />
            <span className="font-medium text-black">Volatile Engine</span>
          </div>
          <span className="text-black">{post.date}</span>
        </div>

        {/* Content */}
        <div 
          className="prose prose-lg max-w-none text-black"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Related Posts */}
        {otherPosts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-black">
            <h2 className="text-2xl font-medium mb-8 text-black">Read More</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {otherPosts.map(([key, relatedPost]) => (
                <Link 
                  key={key}
                  to={`/blog/${key}`}
                  className="group"
                >
                  <div className="aspect-video overflow-hidden bg-muted mb-4">
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-medium mb-2 text-black group-hover:underline">
                    {relatedPost.title}
                  </h3>
                  <p className="text-black">{relatedPost.date}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
