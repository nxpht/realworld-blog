import PersonIcon from "@mui/icons-material/Person";
import { format } from "date-fns";
import type { Profile } from "../api/types";

type AuthorMetaProps = {
  author: Profile;
  date: string;
  variant?: "light" | "dark";
};
function AuthorMeta({ author, date, variant }: AuthorMetaProps) {
  return (
    <div className="flex gap-2 items-center">
      <PersonIcon
        className={
          variant === "dark" ? "rounded-full border border-white text-brand" : "text-brand"
        }
      />

      <div>
        <p className="text-brand font-semibold text-xs">{author.username}</p>
        <p
          className={
            variant === "dark"
              ? "text-gray-300 font-normal text-xs"
              : "text-muted font-normal text-xs"
          }
        >
          {format(date, "dd MMMM yyyy")}
        </p>
      </div>
    </div>
  );
}
export default AuthorMeta;
