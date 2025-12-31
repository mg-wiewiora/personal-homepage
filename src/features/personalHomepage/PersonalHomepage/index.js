import { MainInfo } from "./MainInfo";
import { Skillset } from "./Skillset";
import { Container, Icon } from "./styled";
import { skills, nextSkills } from "./skillsData";
import { Portfolio } from "./Portfolio";
import { Footer } from "./Footer";
import { ThemeSwitch } from "../../../common/ThemeSwitch";

export const PersonalHomepage = () => (
  <Container>
    <ThemeSwitch />
    <MainInfo />

    <main>
      <Skillset
        title={(
          <>
            My skillset includes 🛠
          </>
          )}
        skills={skills}
      />

      <Skillset
        title={(
          <>
            What I want to learn next 🚀
          </>
        )}
        skills={nextSkills}
      />

      <Portfolio />
    </main>
    
    <Footer />
  </Container>
);