import PersonIcon from "@mui/icons-material/Person";
import { format } from "date-fns";
import type { Profile } from "../api/types";

type AuthorMetaProps = {
  author: Profile;
  date: string;
};
function AuthorMeta({ author, date }: AuthorMetaProps) {
  return (
    <div className="flex gap-2 items-center">
      <PersonIcon className="text-brand" />
      <div>
        <p className="text-brand font-semibold text-xs">{author.username}</p>
        <p className="text-muted font-normal text-xs">{format(date, "dd MMMM yyyy")}</p>
      </div>
    </div>
  );
}
export default AuthorMeta;
