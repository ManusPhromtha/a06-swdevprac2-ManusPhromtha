import InteractiveCard from './InteractiveCard';
import Image from 'next/image';

export default function Productcard({ venueName, imgSrc} : {venueName:string, imgSrc:string}) {
    return (
        <InteractiveCard contentName={ venueName }>
            <div className='w-full h-[70%] relative rounded-t-lg rounded-lg'>
                <Image src={imgSrc}
                alt='Product picture'
                fill={true}
                className='object-cover rounded-t-lg'/>
            </div>
            <div className='w-full h-[30%] p-[20px]'>
                {venueName}
            </div>
        </InteractiveCard>
    );
}