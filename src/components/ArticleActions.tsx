// import type { Article } from "../api/types";
// type ArticleActionsProps = { article: Article };

function ArticleActions(/* { article }: ArticleActionsProps */) {
  return (
    <button disabled className="text-white bg-brand rounded-lg text-xs p-2">
      Favorite article
    </button>
  );
}

export default ArticleActions;
