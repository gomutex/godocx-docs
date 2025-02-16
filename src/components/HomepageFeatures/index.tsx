import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Pure Go Library',
    Svg: require('@site/static/img/feature1.svg').default,
    description: (
      <>
        An open source library written in pure Go for Docx file manipulation.
      </>
    ),
  },
  {
    title: 'Read and Modify DOCX Files',
    Svg: require('@site/static/img/feature2.svg').default,
    description: (
      <>
        You can open existing docx files and modify them. You can create from scratch and work on it.
      </>
    ),
  },
  {
    title: 'Features',
    Svg: require('@site/static/img/feature3.svg').default,
    description: (
      <>
        It has basic functionalities including adding paragraphs, headings, tables, adding picture.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
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

export default function HomepageFeatures(): JSX.Element {
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
