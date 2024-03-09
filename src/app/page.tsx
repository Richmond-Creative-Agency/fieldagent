import Image from "next/image";
import Header from './ui/header/Header';
import H1 from "./ui/typography/H1";
import H2 from "./ui/typography/H2";
import P from "./ui/typography/P";
import Link from "next/link";
export default function Home() {
  return (
    <>
    <Header />
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <H1>Welcome Field Agent</H1>
      <H2>What is Field Agent?</H2>
      <P>Field Agent is a set of Tools designed for organizers, by organizers.</P>
      <P>Field Agent is a project of <Link href='https://richmondcreative.agency' >Richmond Creative Agency LLC</Link></P>
    </main>
    </>

  );
}
