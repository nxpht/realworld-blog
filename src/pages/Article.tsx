import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useParams } from "react-router";
import { useEffect, useState } from "react";

function Article() {
  const { slug } = useParams();
  const [article, setArticle] = useState();
  useEffect(() => {
    const fetchArticle = async () => {
      const res = await fetch(`https://realworld.habsida.net/api/articles/${slug}`);
      if (!res.ok) {
        throw new Error("not found");
      }
      const data = await res.json();
      setArticle(data.article.body);
    };
    fetchArticle();
  }, [slug]);
  return (
    <div className="prose max-w-none">
      <Markdown remarkPlugins={[remarkGfm]}>{article}</Markdown>
    </div>
  );
}

export default Article;
