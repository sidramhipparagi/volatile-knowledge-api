export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  content: string;
}

const createBlogImageUrl = (fileName: string) =>
  new URL(`../assets/${fileName}`, import.meta.url).href;

export const blogPosts: Record<string, BlogPost> = {
  "ai-integration-guide": {
    slug: "ai-integration-guide",
    title: "Complete Guide to AI API Integration",
    date: "March 15, 2024",
    image: createBlogImageUrl("img1.jpg"),
    excerpt: "Learn how to integrate AI capabilities into your applications with our comprehensive guide.",
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
    slug: "building-scalable-apis",
    title: "Building Scalable APIs: Best Practices",
    date: "March 10, 2024",
    image: createBlogImageUrl("img2.jpg"),
    excerpt: "Discover essential practices for building APIs that can handle millions of requests.",
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
    slug: "api-security-essentials",
    title: "API Security Essentials for 2024",
    date: "March 5, 2024",
    image: createBlogImageUrl("img3.jpg"),
    excerpt: "Security best practices every API developer needs to implement this year.",
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
  },
  "microservices-architecture": {
    slug: "microservices-architecture",
    title: "Microservices Architecture: A Modern Approach",
    date: "February 28, 2024",
    image: createBlogImageUrl("img4.jpg"),
    excerpt: "Understanding microservices and how to implement them effectively in your applications.",
    content: `
      <p class="mb-6">Microservices architecture has revolutionized how we build and deploy applications. This guide explores the benefits and challenges of adopting microservices.</p>
      
      <h2 class="text-2xl font-medium mb-4 mt-8">What Are Microservices?</h2>
      <p class="mb-6">Microservices break down applications into smaller, independent services that can be developed, deployed, and scaled separately.</p>
      
      <h2 class="text-2xl font-medium mb-4 mt-8">Benefits of Microservices</h2>
      <p class="mb-6">Independent deployment, technology flexibility, and improved fault isolation are just a few advantages of microservices architecture.</p>
      
      <h2 class="text-2xl font-medium mb-4 mt-8">Challenges to Consider</h2>
      <p class="mb-6">Distributed systems complexity, data consistency, and service discovery require careful planning and implementation.</p>
    `
  },
  "cloud-native-development": {
    slug: "cloud-native-development",
    title: "Cloud-Native Development Best Practices",
    date: "February 20, 2024",
    image: createBlogImageUrl("img5.jpg"),
    excerpt: "Build applications designed to thrive in modern cloud environments.",
    content: `
      <p class="mb-6">Cloud-native development leverages the full potential of cloud computing. Learn how to build applications that scale effortlessly.</p>
      
      <h2 class="text-2xl font-medium mb-4 mt-8">Containerization</h2>
      <p class="mb-6">Docker and container technologies enable consistent deployment across different environments.</p>
      
      <h2 class="text-2xl font-medium mb-4 mt-8">Orchestration with Kubernetes</h2>
      <p class="mb-6">Kubernetes automates deployment, scaling, and management of containerized applications.</p>
      
      <h2 class="text-2xl font-medium mb-4 mt-8">Serverless Computing</h2>
      <p class="mb-6">Focus on code while the cloud provider manages infrastructure and scaling automatically.</p>
    `
  },
  "graphql-vs-rest": {
    slug: "graphql-vs-rest",
    title: "GraphQL vs REST: Choosing the Right API",
    date: "February 15, 2024",
    image: createBlogImageUrl("img6.jpg"),
    excerpt: "Compare GraphQL and REST to make informed decisions for your API strategy.",
    content: `
      <p class="mb-6">Choosing between GraphQL and REST can significantly impact your application's performance and developer experience.</p>
      
      <h2 class="text-2xl font-medium mb-4 mt-8">REST APIs</h2>
      <p class="mb-6">REST has been the standard for years, offering simplicity and widespread support across tools and frameworks.</p>
      
      <h2 class="text-2xl font-medium mb-4 mt-8">GraphQL Advantages</h2>
      <p class="mb-6">GraphQL provides flexible queries, reduces over-fetching, and offers strong typing for better developer experience.</p>
      
      <h2 class="text-2xl font-medium mb-4 mt-8">When to Use Each</h2>
      <p class="mb-6">REST works well for simple, predictable data structures, while GraphQL shines in complex, nested data scenarios.</p>
    `
  },
  "devops-automation": {
    slug: "devops-automation",
    title: "DevOps Automation: Streamlining Your Workflow",
    date: "February 10, 2024",
    image: createBlogImageUrl("img7.jpg"),
    excerpt: "Automate your development and deployment processes for faster delivery.",
    content: `
      <p class="mb-6">DevOps automation reduces manual errors and speeds up delivery cycles. Learn how to implement effective automation strategies.</p>
      
      <h2 class="text-2xl font-medium mb-4 mt-8">CI/CD Pipelines</h2>
      <p class="mb-6">Continuous Integration and Continuous Deployment pipelines automate testing and deployment processes.</p>
      
      <h2 class="text-2xl font-medium mb-4 mt-8">Infrastructure as Code</h2>
      <p class="mb-6">Manage infrastructure through code using tools like Terraform and AWS CloudFormation.</p>
      
      <h2 class="text-2xl font-medium mb-4 mt-8">Monitoring and Alerts</h2>
      <p class="mb-6">Automated monitoring ensures you catch issues before they impact users.</p>
    `
  },
  "api-versioning-strategies": {
    slug: "api-versioning-strategies",
    title: "API Versioning Strategies for Long-Term Success",
    date: "February 5, 2024",
    image: createBlogImageUrl("img8.jpg"),
    excerpt: "Learn how to version your APIs effectively to maintain backward compatibility.",
    content: `
      <p class="mb-6">API versioning is crucial for maintaining existing clients while evolving your API. Discover the best strategies for versioning.</p>
      
      <h2 class="text-2xl font-medium mb-4 mt-8">URL Versioning</h2>
      <p class="mb-6">Include version numbers in the URL path for clear, explicit versioning that's easy to understand.</p>
      
      <h2 class="text-2xl font-medium mb-4 mt-8">Header Versioning</h2>
      <p class="mb-6">Use custom headers to specify API versions, keeping URLs clean and consistent.</p>
      
      <h2 class="text-2xl font-medium mb-4 mt-8">Deprecation Policies</h2>
      <p class="mb-6">Establish clear deprecation timelines and communicate changes effectively to API consumers.</p>
    `
  }
};

// Helper function to get all blog posts as an array
export const getAllBlogPosts = (): BlogPost[] => {
  return Object.values(blogPosts);
};

// Helper function to get a single blog post by slug
export const getBlogPostBySlug = (slug: string): BlogPost | null => {
  return blogPosts[slug] || null;
};

