import { Suspense } from 'react';
import Canvassr from './Canvassr';
import Main from '../../ui/components/Main';
import H1 from '../../ui/typography/H1';

export const metadata = {
  title: 'Canvassr | Field Agent',
  description: 'Canvass your community',
};

export default function Page() {
  return (
    <Main>
      <H1></H1>
      <Suspense fallback={<p>Loading Canvassr</p>}>
        <Canvassr />
      </Suspense>
    </Main>
  );
}
