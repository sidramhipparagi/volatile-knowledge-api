import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { getAllBlogPosts } from "@/data/blogs";
import { useInView } from "@/hooks/use-in-view";

const Newsroom = () => {
  const { ref, isInView } = useInView();
  const blogPosts = getAllBlogPosts();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-6 py-32">
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-medium mb-6 text-black">
            Newsroom
          </h1>
          <p className="text-xl text-black max-w-2xl">
            Insights, updates, and best practices from our team
          </p>
        </div>

        <div 
          ref={ref}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group"
            >
              <div className="aspect-video overflow-hidden bg-muted mb-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-medium mb-2 text-black group-hover:underline">
                {post.title}
              </h3>
              <p className="text-black mb-2">{post.excerpt}</p>
              <span className="text-black text-sm">{post.date}</span>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Newsroom;
