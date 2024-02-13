import { stripe } from '@/infra/stripe/stripe';
import Plan from '@/components/Plan';
import Link from 'next/link';
import { MoveLeft } from 'lucide-react';

type PriceType = {
  name: string;
  id: string;
  price: number;
  interval?: string;
};

const Business = async () => {
  const plans = await getPlans();
  return (
    <div className="flex items-stretch h-[100vh] bg-[#0d1224] ">
      <div className="flex items-center flex-col place-content-center w-full">
        <span className="text-3xl font-extrabold text-[#f926ae] mb-5 lg:text-5xl">Experimente grátis</span>
        <span className="text-sm font-medium text-slate-200 mb-10 lg:text-lg">
          Comece grátis por 7 dias e transforme seu negócio
        </span>
        <Plan plans={plans} />
        <Link className="text-slate-300 mt-4 font-normal flex items-center justify-center gap-1" href="/">
          <MoveLeft size={16} />
          Voltar
        </Link>
      </div>
    </div>
  );
};

export const getPlans = async () => {
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
