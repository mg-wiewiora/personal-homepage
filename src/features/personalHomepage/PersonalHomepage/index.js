import { MainInfo } from "./MainInfo";
import { Skills } from "./Skills";
import { Container } from "./styled";
import { skills, nextSkills } from "./skillsData";
import { Portfolio } from "./Portfolio";
import { Footer } from "./Footer";
import { ThemeSwitch } from "../../../common/ThemeSwitch";

export const PersonalHomepage = () => (
  <Container>
    <ThemeSwitch />
    <MainInfo />

    <main>
      <Skills title={<>My skillset includes 🛠</>} skills={skills} />

      <Skills title={<>What I want to learn next 🚀</>} skills={nextSkills} />

      <Portfolio />
    </main>

    <Footer />
  </Container>
);
