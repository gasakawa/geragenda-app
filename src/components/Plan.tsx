'use client';
import { useState } from 'react';
import { BellRing, CalendarDays, CalendarPlus, CircleUser, Hammer, MailWarning, Store } from 'lucide-react';
import { Button } from './ui/button';

type PriceType = {
  name: string;
  id: string;
  price: number;
  interval?: string;
};

const Plan = ({ plans }: { plans: PriceType[] }) => {
  const [selected, setSelected] = useState('month');

  const plan = plans.find(plan => plan.interval === selected);

  const togglePlan = () => {
    const interval = selected === 'month' ? 'year' : 'month';
    setSelected(interval);
  };

  return (
    <div className="flex flex-col items-center bg-slate-100 py-5 px-3 rounded w-[350px]  shadow-md shadow-[#f926ae]/50 sm:w-[400px]">
      <div className="flex items-center gap-2 mb-2 font-semibold">
        Mensal
        <label className="switch">
          <input type="checkbox" onChange={togglePlan} />
          <span className="slider round"></span>
        </label>
        Anual
      </div>

      <span className="text-1xl font-extrabold lg:text-3xl mb-3">Professional</span>
      <div className="relative mb-6">
        <span className="text-3xl font-extrabold">{`R$ ${plan?.price}`}</span>
        <span className="absolute top-0 font-extrabold text-sm">,00</span>
        <span className="text-[12px] text-slate-700 absolute bottom-0">/{selected === 'month' ? 'mes' : 'ano'} </span>
      </div>
      <div className="flex  border-solid items-stretch bg-slate-200 p-4 w-[70%] rounded-sm">
        <ul className="flex flex-col justify-start text-slate-800 gap-y-4">
          <li className="flex  items-center gap-3  text-sm hover:text-[#f926ae]">
            <Store size={16} />1 estabelecimento
          </li>
          <li className="flex  items-center gap-3  text-sm hover:text-[#f926ae]">
            <CircleUser size={16} />5 colaboradores
          </li>
          <li className="flex items-center gap-3 text-sm hover:text-[#f926ae]">
            <CalendarDays size={16} />
            Agendamentos ilimitados
          </li>
          <li className="flex items-center gap-3 text-sm hover:text-[#f926ae]">
            <CalendarPlus size={16} />
            Agenda customizada
          </li>
          <li className="flex items-center gap-3 text-sm hover:text-[#f926ae]">
            <Hammer size={16} />
            Serviços ilimitados
          </li>
          <li className="flex items-center gap-3 text-sm hover:text-[#f926ae]">
            <MailWarning size={16} />
            Notificações por email
          </li>
          <li className="flex items-center gap-3 text-sm hover:text-[#f926ae]">
            <BellRing size={16} />
            Lembretes
          </li>
        </ul>
      </div>
      <Button className="mt-4 bg-[#f926ae] font-bold " size={'lg'}>
        Começar
      </Button>
    </div>
  );
};

export default Plan;
