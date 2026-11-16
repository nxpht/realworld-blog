import type { Article } from "../api/types";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { format } from "date-fns";
import { Link } from "react-router";

type ArticlePreviewProps = {
  article: Article;
};

function ArticlePreview({ article }: ArticlePreviewProps) {
  return (
    <article className="border border-muted rounded-lg p-5 ">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <PersonIcon className="text-brand" />
          <div>
            <p className="text-brand font-semibold text-xs">{article.author.username}</p>
            <p className="text-muted font-normal text-xs">
              {format(article.createdAt, "dd MMMM yyyy")}
            </p>
          </div>
        </div>
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
