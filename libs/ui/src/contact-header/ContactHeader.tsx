import { TbMailOpened, TbPhoneCalling } from 'react-icons/tb';

export function ContactHeader() {
  return (
    <>
      <h2 className="head-text default-police mt-2">
        Take a coffee <span className={'text-secondary'}>& chat with me</span>
      </h2>
      <div className="app__footer-cards my-0 lg:my-12 mx-auto">
        <div className="app__footer-card ">
          <TbMailOpened className={'text-2xl text-blue-500 mr-4'} />
          <a
            href="mailto:axel@axelmwenze.dev"
            className="p-text default-police"
          >
            axel@axelmwenze.dev
          </a>
        </div>
        <div className="app__footer-card">
          <TbPhoneCalling className={'text-2xl text-blue-500 mr-4'} />
          <a href="tel:+243975344824" className="p-text default-police">
            +243975344824
          </a>
        </div>
      </div>
    </>
  );
}

export default ContactHeader;
