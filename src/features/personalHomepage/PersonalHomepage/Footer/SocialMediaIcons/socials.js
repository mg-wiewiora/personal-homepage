import { styleIcon } from "./styled";
import { ReactComponent as GitHubIcon } from "./icons/github.svg";
import { ReactComponent as LinkedInIcon } from "./icons/linkedin.svg";

export const socials = [
  {
    name: "GitHub",
    url: "https://github.com/mg-wiewiora",
    Icon: styleIcon(GitHubIcon),
  },
   {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mg-wiewiora",
    Icon: styleIcon(LinkedInIcon),
  },
];