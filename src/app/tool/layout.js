import Main from '../ui/components/Main';
export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return <Main>{children}</Main>;
}
