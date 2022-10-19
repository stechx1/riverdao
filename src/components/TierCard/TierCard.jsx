/* eslint-disable @next/next/no-img-element */
export const TierCard = () => {
  return (
    <div className='flex flex-col p-5 drop-shadow-2xl font-chivo'>
      <div>
        <div>
          {/* Image */}
          <img src='/images/tier-1.png' alt='tier 1 image' />
        </div>
        <div>
          {/* Content */}
          <div className='flex items-center gap-x-2'>
            <h2 className='text-[22px] font-bold'>Tier Name.</h2>
            <p className='text-[20px] font-bold text-[#9E9e9e]'>100 $MATIC</p>
          </div>
          <ul className='list-disc text-left pl-8'>
            <li>2-Vote Card</li>
            <li>Receive 5.000 $RVER airdrop</li>
            <li>Join River Dao Discord Channel</li>
            <li>Unlock special campaigns</li>
          </ul>
        </div>
      </div>
      <div>{/* Buttons */}</div>
    </div>
  );
};
