import { socials } from "./socials";
import { Item, Link, List } from "./styled";

export const SocialMediaIcons = () => (
  <List>
    {socials.map(({ name, url, Icon }) => (
      <Item key={name}>
        <Link href={url} title={name} target="_blank" rel="noreferre">
          <Icon />
        </Link>
      </Item>
    ))}
  </List>
);