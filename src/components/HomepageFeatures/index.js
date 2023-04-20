import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import gamefamConfig from '../../../gamefam.config'
import getAuthorsString from '../../../getAuthorsString'

const FeatureList = [
  {
    title: `Developer(s): ${getAuthorsString(gamefamConfig.authors)}`,
    imagePath: gamefamConfig.developersIcon,
    description: (
      <>
        This code is being actively maintained by {getAuthorsString(gamefamConfig.authors)}.
      </>
    ),
  },
];

function Feature({imagePath, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} src={imagePath}/>
      </div>
      <div className="text--center padding-horiz--md">
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
        <div className={styles.center}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
