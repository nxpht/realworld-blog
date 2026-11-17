import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import type { Article, ArticleResponse } from "../api/types";

function ArticlePage() {
  const { slug } = useParams();
  const [article, setArticle] = useState<Article>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchArticle = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`https://realworld.habsida.net/api/articles/${slug}`);
        if (!res.ok) {
          throw new Error(
            res.status === 404 ? "Article not found" : `Request failed: ${res.status}`,
          );
        }
        const data: ArticleResponse = await res.json();
        setArticle(data.article);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    fetchArticle();
  }, [slug]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!article) return null;
  return (
    <div className="prose max-w-none">
      <Markdown remarkPlugins={[remarkGfm]}>{article.body}</Markdown>
    </div>
  );
}

export default ArticlePage;
