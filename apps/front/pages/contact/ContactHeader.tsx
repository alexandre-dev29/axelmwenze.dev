import { TbMailOpened, TbPhoneCalling } from 'react-icons/tb';

export default function ContactHeader() {
  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>
      <div className="app__footer-cards ">
        <div className="app__footer-card ">
          <TbMailOpened className={'text-2xl text-blue-500 mr-4'} />
          <a href="mailto:axel@axelmwenze.dev" className="p-text">
            axel@axelmwenze.dev
          </a>
        </div>
        <div className="app__footer-card">
          <TbPhoneCalling className={'text-2xl text-blue-500 mr-4'} />
          <a href="tel:+243975344824" className="p-text">
            +243975344824
          </a>
        </div>
      </div>
    </>
  );
}