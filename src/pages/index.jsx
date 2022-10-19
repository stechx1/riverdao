import { TierCard } from '../components';
import { Footer } from '../components/Footer/Footer';

export default function Home() {
  const tier1Points = [
    {
      id: 1,
      listItem: '2-Vote Card',
    },
    {
      id: 2,
      listItem: 'Receive 5.000 $RVER airdrop',
    },
    {
      id: 3,
      listItem: 'Join River Dao Discord Channel',
    },
    {
      id: 4,
      listItem: 'Unlock special campaigns',
    },
  ];

  const tier2Points = [
    {
      id: 1,
      listItem: '5-Vote Card',
    },
    {
      id: 2,
      listItem: 'Receive 12.5000 $RVER airdrop',
    },
    {
      id: 3,
      listItem: 'Join $RVER Private Sale waiting list',
    },
    {
      id: 4,
      listItem: 'Join River Dao Discord Channel',
    },
    {
      id: 5,
      listItem: 'Unlock special campaigns',
    },
  ];

  const tier3Points = [
    {
      id: 1,
      listItem: '10-Vote Card',
    },
    {
      id: 2,
      listItem: 'Receive 25.000 $RVER airdrop',
    },
    {
      id: 3,
      listItem: 'Acquire guaranteed spot at $RVER Private Sale',
    },
    {
      id: 4,
      listItem: 'Join River Dao Discord Channel',
    },
    {
      id: 5,
      listItem: 'Unlock special campaigns',
    },
  ];

  return (
    <div className='container mx-auto text-center my-12'>
      <div className='space-y-4'>
        <h1 className='text-4xl font-chivo font-bold'>
          Your key to perks and privileges
        </h1>
        <p className='font-chivo'>
          The River Founding Member Card is your key to join River Dao, unlock
          special campaigns, receive surprise airdrops, and attain voting
          rights. Each tier comes with different bonuses and voting power.
          Membership Card NFTs can only be minted at the official River Dao
          website, and they are tradable in the secondary markets.
        </p>
      </div>
      {/* Grid */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-x-6 my-10'>
        {/* imgSrc, tierName, amount, points */}
        <TierCard
          imgSrc={'/images/tier-1.png'}
          tierName='Founding Member Tier 1'
          amount='100'
          points={tier1Points}
        />
        <TierCard
          imgSrc={'/images/tier-2.png'}
          tierName='Founding Member Tier 2'
          amount='250'
          points={tier2Points}
        />
        <TierCard
          imgSrc={'/images/tier-3.png'}
          tierName='Founding Member Tier 3'
          amount='500'
          points={tier3Points}
        />
      </div>

      <div>
        <p className='text-sm text-[#7c7c7c] font-chivo my-8'>
          By purchasing a Member Tier, you agree to Riverdao&apos;s
          <span className='underline'> Privacy Policy</span> and{' '}
          <span className='underline'>Terms of Use</span>
        </p>
      </div>

    </div>
  );
}
