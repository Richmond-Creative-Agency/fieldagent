import Main from '../ui/components/Main';
import H1 from '../ui/typography/H1';
import H2 from '../ui/typography/H2';
import P from '../ui/typography/P';
export default function Page() {
  return (
    <Main>
      <H1>Donate</H1>
      <div className="py-4">
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>

        <stripe-buy-button
          buy-button-id="buy_btn_1OyFKa4GSUdC7n4YtyrrVGhv"
          publishable-key="pk_live_51OrQDt4GSUdC7n4YIoSZ1fTWG500iGqih3myJ8kvLMIjcSsD281nnswrKFVGeJz9MU4HXuSbmL99jZf9ZBC71rit00tWwWFWk8"
        ></stripe-buy-button>
      </div>

      <P>
        Your support helps us continue to build and develop the tools that
        communities need to win power and organize!
      </P>
    </Main>
  );
}
