import Feed from "@components/Feed";
function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Découvrir & partager
        <br className="max-md:hidden" />
        <span className="orange_gradient"> Promesses de l'IA-Powred</span>
      </h1>
      <p className="desc text-center">
        Promptopia est un outil d'incitation à l'IA open-source pour le monde
        moderne. découvrir, créer et partager des messages créatifs
      </p>
      {/**Feed */}
      <Feed />
    </section>
  );
}

export default Home;
