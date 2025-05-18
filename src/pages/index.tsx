// src/pages/index.js
import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";
import UnderConstruction from "../components/UnderConstruction";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <UnderConstruction />
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
          <div className={styles.buttons} style={{ marginRight: "20px" }}>
            <Link className="button button--primary button--lg" to="/intro">
              Dokumentasjon
            </Link>
          </div>
          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="https://next.o-tid.com/">
              Tidtaking
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
