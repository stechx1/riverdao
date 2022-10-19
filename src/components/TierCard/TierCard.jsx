import { Button } from '../Button';

/* eslint-disable @next/next/no-img-element */
export const TierCard = ({ imgSrc, tierName, amount, points }) => {
  return (
    <div className='flex flex-col shadow-2xl font-chivo justify-between rounded-[1.45rem] h-[670px]'>
      <div>
        <div>
          {/* Image */}
          <img
            className='rounded-t-[1.45rem]'
            src={imgSrc}
            alt={`${tierName} image`}
          />
        </div>
        <div className='p-5'>
          {/* Content */}
          <div className='flex items-center space-x-6 mb-4'>
            <h2 className='text-[20px] font-bold'>{tierName}</h2>
            <p className='text-[18px] font-bold text-[#9E9e9e]'>
              {amount} $MATIC
            </p>
          </div>
          <ul className='list-disc text-left pl-8'>
            {points.map((point) => (
              <li key={point.id}>{point.listItem}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className='flex flex-col space-y-3 mb-5 p-5'>
        <Button type='primary'>SIGN UP</Button>
        <Button>LEARN MORE</Button>
      </div>
    </div>
  );
};
