import type { Article } from "../api/types";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router";
import AuthorMeta from "./AuthorMeta";

type ArticlePreviewProps = {
  article: Article;
};

function ArticlePreview({ article }: ArticlePreviewProps) {
  return (
    <article className="border border-muted rounded-lg p-5 ">
      <div className="flex justify-between items-center">
        <AuthorMeta author={article.author} date={article.createdAt} variant="light" />
        <button
          disabled
          className="inline-flex items-center justify-between gap-2 px-4 py-2 rounded-lg border border-brand text-sm text-brand"
        >
          <FavoriteIcon />
          {article.favoritesCount}
        </button>
      </div>
      <h2 className="title">
        <Link to={`/articles/${article.slug}`}>{article.title}</Link>
      </h2>
      <p className="default-text">{article.description}</p>
      <div className="flex items-center gap-2 mt-5">
        {article.tagList.map((tag) => (
          <div className="tag" key={tag}>
            {tag}
          </div>
        ))}
      </div>
    </article>
  );
}
export default ArticlePreview;
