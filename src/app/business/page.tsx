import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { stripe } from '@/infra/stripe/stripe';

type PriceType = {
  name: string;
  id: string;
  price: number;
  interval?: string;
};

const Business = async () => {
  return (
    <div className="flex items-stretch h-[100vh] bg-[#0d1224] ">
      <div className={`flex-[1] background-signup`}></div>

      <div className="flex flex-col items-center place-content-center w-[100%] max-w-[700px]"></div>
    </div>
  );
};

export const getPrices = async () => {
  const { data: prices } = await stripe.prices.list();
  const plans: PriceType[] = [];

  for (const price of prices) {
    const product = await stripe.products.retrieve(price.product as string);
    plans.push({
      name: product.name,
      id: price.id,
      price: price.unit_amount ? price.unit_amount / 100 : 0,
      interval: price.recurring?.interval,
    });
  }

  return plans;
};

export default Business;
