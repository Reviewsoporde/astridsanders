import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="not-found shell">
      <p className="eyebrow">Pagina in voorbereiding</p>
      <h1>Deze pagina volgt binnenkort.</h1>
      <p>
        De homepage en gratis gezondheidscheck staan al voor je klaar. Ga terug om de
        mogelijkheden te bekijken.
      </p>
      <Link className="button" href="/">
        Terug naar home
      </Link>
    </main>
  );
}
