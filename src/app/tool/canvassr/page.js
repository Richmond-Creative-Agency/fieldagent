import Canvassr from './Canvassr';
import H1 from '../../ui/typography/H1';

export const metadata = {
  title: 'Canvassr | Field Agent',
  description: 'Canvass your community',
};

export default function Page({ children }) {
  return (
    <>
      <H1>Canvassr</H1>
      <Canvassr />
      {children}
    </>
  );
}
