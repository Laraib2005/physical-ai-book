import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Physical AI Concepts',
    Svg: require('@site/static/img/robot-icon.svg').default,
    description: (
      <>
        Learn the fundamental concepts of Physical AI, where intelligence emerges
        from the interaction between AI algorithms and physical systems.
      </>
    ),
  },
  {
    title: 'Robotics Applications',
    Svg: require('@site/static/img/robot-icon.svg').default,
    description: (
      <>
        Explore real-world applications of robotics in autonomous systems,
        humanoid robots, and intelligent automation.
      </>
    ),
  },
  {
    title: 'Advanced Techniques',
    Svg: require('@site/static/img/robot-icon.svg').default,
    description: (
      <>
        Master advanced techniques in perception, control, and learning for
        physical AI systems through practical examples.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
