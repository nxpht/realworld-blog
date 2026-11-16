import Pagination from "@mui/material/Pagination";
import { useState, useEffect } from "react";
import type { Article, ArticlesResponse } from "../api/types";
import ArticlePreview from "../components/ArticlePreview";
import Container from "@mui/material/Container";
const ARTICLES_PER_PAGE = 3;

function Home() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [articlesCount, setArticlesCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const totalPages = Math.ceil(articlesCount / ARTICLES_PER_PAGE);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      setError(null);
      try {
        const offset = (currentPage - 1) * ARTICLES_PER_PAGE;
        const res = await fetch(
          `https://realworld.habsida.net/api/articles?limit=${ARTICLES_PER_PAGE}&offset=${offset}`,
        );
        if (!res.ok) {
          throw new Error(
            res.status === 429 ? "too many requests" : `request failed: ${res.status}`,
          );
        }
        const data: ArticlesResponse = await res.json();
        setArticles(data.articles);
        setArticlesCount(data.articlesCount);
      } catch (err) {
        setError(err instanceof Error ? err.message : "something went wrong");
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, [currentPage]);
  return (
    <section>
      <Container>
        <div className="flex flex-col gap-4 my-5">
          {error && <p>{error}</p>}
          {loading ? (
            <p>Loading...</p>
          ) : (
            articles.map((article) => <ArticlePreview article={article} key={article.slug} />)
          )}
        </div>

        {totalPages > 1 && (
          <div className="mt-4 mb-4 flex justify-center">
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={(_event, page) => setCurrentPage(page)}
              disabled={loading}
              variant="outlined"
              shape="rounded"
              hidePrevButton
              hideNextButton
              sx={{
                "& .MuiPagination-ul": { gap: 0 },
                "& .MuiPaginationItem-root": {
                  margin: 0,
                  borderRadius: 0,
                  borderColor: "var(--color-brand)",
                  color: "var(--color-brand)",
                },
                "& .MuiPaginationItem-root.Mui-selected": {
                  backgroundColor: "var(--color-brand)",
                  color: "#fff",
                },
                "& .MuiPaginationItem-root.Mui-selected:hover": {
                  backgroundColor: "var(--color-brand)",
                  opacity: 0.9,
                },
              }}
            />
          </div>
        )}
      </Container>
    </section>
  );
}

export default Home;
