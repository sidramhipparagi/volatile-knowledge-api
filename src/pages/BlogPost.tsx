import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import veLogo from "@/assets/vE_logo.png";
import { ArrowLeft } from "lucide-react";
import { blogPosts, getBlogPostBySlug } from "@/data/blogs";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : null;

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
        <Button
          asChild
          variant="ghost"
          className="mb-8 gap-2 px-0 text-black hover:bg-transparent hover:text-black"
        >
          <Link to="/#blog" className="inline-flex items-center gap-2 group">
            <ArrowLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1" />
            <span className="text-xl group-hover:underline">Back to blog</span>
          </Link>
        </Button>

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
