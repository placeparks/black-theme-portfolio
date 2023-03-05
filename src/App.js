import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Hannan Shaukat",
    location: "Punjab, Pakistan",
    tagline: "I'm a Developer",
    email: "mrac.eth@thereum.email",
    availability: "Open for work",
    brand:
      "Welcome to my blockchain website! As a petroleum engineer with a Masters in total quality management and a full stack developer,I am excited to share my expertise in blockchain technology with you. The combination of my technical background and knowledge of quality management provides me with a unique perspective on how blockchain can revolutionize various industries. Through this website, I aim to explore the potential of blockchain, share the latest developments in the field, and offer insights on how this disruptive technology can transform businesses and organizations. ",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
