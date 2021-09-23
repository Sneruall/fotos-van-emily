import Section from "../layout/Section";
import WerkwijzeStap from "./elements/WerkwijzeStap";

function WerkwijzeSection(props) {
  return (
    <Section bg="bg-grey-light2">
      <div className="mx-auto max-w-6xl">
        <h2 className="title-1 mb-16">
          HOE GA IK TE WERK?
        </h2>
        <div className="border border-white my-5">
          <div className="bg-white m-1 px-6 lg:px-16 py-4 bg-opacity-70">
            <WerkwijzeStap
              number="1"
              title="Contact vooraf"
              description="Neem contact met mij op, dat kan via het contactformulier maar je mag me ook bellen of whatsappen. Ik laat zo snel mogelijk van mij horen, altijd binnen 24 uur. Samen bespreken we jouw wensen en vragen, we gaan op zoek naar een locatie en we prikken een datum. Ik stuur een overzichtelijk mailtje met alle info/details die we besproken hebben en wat extra tips en adviezen voor de shoot."
            />
            <WerkwijzeStap
              number="2"
              title="TWEE DAGEN VOOR DE FOTOSHOOT"
              description="Ik neem nog even contact met je op, ik geef je een update over het weer en we passen eventueel het tijdstip of de locatie van de portretshoot iets aan."
            />
            <WerkwijzeStap
              number="3"
              title="DE FOTOSHOOT ZELF"
              description="We meeten elkaar op de afgesproken locatie. We zijn ongeveer 30 tot 45 minuten bezig, ik neem de tijd voor je en zorg voor een diversiteit aan foto's."
            />
            <WerkwijzeStap
              number="4"
              title="NA DE FOTOSHOOT"
              description="Ongeveer 1 week na de shoot kun je de foto’s verwachten, die worden via WeTransfer geleverd (via de mail krijg je een download link). Mocht je op de een of andere manier jouw foto’s kwijtraken, wees gerust, ik sla jouw foto’s een jaar lang veilig op."
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default WerkwijzeSection;
