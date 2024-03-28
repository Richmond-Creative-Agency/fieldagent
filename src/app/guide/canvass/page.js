import Main from '../../ui/components/Main';
import H1 from '../../ui/typography/H1';
import H2 from '../../ui/typography/H2';
import P from '../../ui/typography/P';
import Link from 'next/link';
export const metadata = {
  title: 'How To Canvass | Field Agent',
  description: 'Canvass your community',
};
export default function Page() {
  return (
    <Main>
      <H1>How To Canvass and use Canvassr</H1>
      <H2>What is Canvassing?</H2>
      <P>
        Canvassing is the art of talking to people to get them to take action.
        Canvassing is having ordinary conversations to communicate.
      </P>
      <P>Canvassing can be done anywhere, by anyone.</P>
      <P>
        Our Canvassing tool, <Link href="/tool/canvassr">Canvassr</Link>, can be
        used to help track who you have and haven't canvassed.
      </P>
      <H2>What is Canvassr?</H2>
      <P>
        Canvassr is a tool for organizers who are canvassing in their
        communities. It&apos;s a free tool for all organizers.
      </P>
      <P>
        Looking to support? <Link href="/donate">Donate</Link>
      </P>
    </Main>
  );
}
