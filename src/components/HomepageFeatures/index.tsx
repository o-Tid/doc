// src/components/HomepageFeatures/index.js
import React from 'react';
import clsx from 'clsx';
import { Timer, Map, Trophy, Flag, Users, Activity } from 'lucide-react';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Tidtaking enkelt',
    Icon: Timer,
    description: (
      <>
        Tidtaking med støtte for både fristart, starttid, fellestart og jaktstart.
        Håndterer små og mellomstore arrangemrt.
      </>
    ),
  },
  {
    title: 'Fleksibel løype oppsett',
    Icon: Map,
    description: (
      <>
        Løyper kan sette på klasse eller løper.
        Full oversikt over poster og deltager.
      </>
    ),
  },
  {
    title: 'Live Resultater',
    Icon: Activity,
    description: (
      <>
        Sanntidsoppdatering av resultater for publikum og deltakere.
        Gjøres på egen live resulta side.
      </>
    ),
  },
  {
    title: 'Påmeldinger fra Eventor',
    Icon: Users,
    description: (
      <>
        Enkel håndtering av påmeldinger og deltakere fra Eventor med et klikk.
      </>
    ),
  },
  {
    title: 'Målgang',
    Icon: Flag,
    description: (
      <>
        Effektiv registrering av målgang og resultater.
        Egen strekktidslapp med disksjekk.
      </>
    ),
  },
  {
    title: 'Resultatlister',
    Icon: Trophy,
    description: (
      <>
        Lokal utskrift av lister og opplasting til Eventor.
      </>
    ),
  },
];

function Feature({title, description, Icon}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <div className="margin-bottom--md">
          <Icon
            className={styles.featureIcon}
            size={32}
            strokeWidth={1.5}
          />
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}