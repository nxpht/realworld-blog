import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import type { Article, ArticleResponse } from "../api/types";
import Container from "../components/Container";
import ArticleActions from "../components/ArticleActions";
import AuthorMeta from "../components/AuthorMeta";
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
    <>
      <section className="bg-heading py-10 text-white mt-[118px]">
        <Container className="">
          <h1 className="text-5xl mb-5">{article.title}</h1>
          <AuthorMeta author={article.author} date={article.createdAt} variant="dark" />
        </Container>
      </section>

      <Container className="">
        <div className="prose max-w-none mt-8">
          <Markdown remarkPlugins={[remarkGfm]}>{article.body}</Markdown>
        </div>
        <div className="flex items-center gap-2 mt-5 mb-5">
          {article.tagList.map((tag) => (
            <div className="tag" key={tag}>
              {tag}
            </div>
          ))}
        </div>
        <div className="flex gap-2 justify-center">
          <AuthorMeta author={article.author} date={article.createdAt} variant="light" />
          <ArticleActions />
        </div>
      </Container>
    </>
  );
}

export default ArticlePage;
