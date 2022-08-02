import styles from './footer.module.scss';

/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <div className={'fixed bottom-0 w-screen'}>
      <h5 className={'text-center text-gray-400'}>
        Copyright @ Axel Mwenze 2022
      </h5>
    </div>
  );
}

export default Footer;
