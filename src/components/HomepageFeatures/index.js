import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Prototype While You Code',
    Svg: require('@site/static/img/VSCode.svg').default,
    description: (
      <>
        Our VS Code extension conveniently places all the API prototyping tools you need right in your favorite IDE.
      </>
    ),
  },
  {
    title: 'OpenAPI Specification',
    Svg: require('@site/static/img/OpenAPI.svg').default,
    description: (
      <>
        Describe your API(s) with the popular OpenAPI specification using ProtoPI's handy tools.
      </>
    ),
  },
  {
    title: 'Mock with Prism',
    Svg: require('@site/static/img/Stoplight.svg').default,
    description: (
      <>
        ProtoPI has Stoplight Prism built in, so you can easily mock your API right from within VS Code.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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
