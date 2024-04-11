import H1 from '../../ui/typography/H1';
import Emailr from './Emailr';

export const metadata = {
  title: 'Emailr | Field Agent',
  description: 'Email your City with Emailr!',
};

export default function Page() {
  return (
    <>
      <H1>Emailr</H1>
      <Emailr />
    </>
  );
}
