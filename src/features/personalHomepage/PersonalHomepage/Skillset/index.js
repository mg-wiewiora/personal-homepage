import { StyleHeader, Item, List, Section, Bullet } from "./styled";

export const Skillset = ({ title, skills }) => (
  <Section>
    <StyleHeader>{title}</StyleHeader>
    <List>
      {skills.map(skill => (
        <Item key={skill}>
          <Bullet />
          {skill}
        </Item>
      ))}
    </List>
  </Section>
);