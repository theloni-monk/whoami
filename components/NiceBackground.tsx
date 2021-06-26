import { Fixed } from '@primer/components'
import {useState, useEffect} from 'react'
import {skyline} from '../images'
import Image from 'next/image'
const NiceBackground = (props: any) => {
    const [initHeight, setInitHeight] = useState(1280);
    useEffect(()=>setInitHeight(window.innerHeight),[])
    const[headOffset, setHeadOffset] = useState(0);
    useEffect(()=>{
        setHeadOffset(document.getElementById('head')?.clientHeight as number)
    },[headOffset])

    const blur: number = props.blur || 2;
    return (
        <div>
        
        <Fixed sx={{
            overflow: 'hidden',
            position: 'fixed', zIndex: '0!important',
            filter: 'blur(' + blur as string + 'px)',
            height: initHeight,
            transition: '0.2s',
            transform: 'scale(1.1)',
            top: headOffset,
            left: 0
        }}>
            <Image 
            src={skyline} alt='vegas skyline' layout='fixed' loading='eager'
            height= {initHeight}
            />
            
            {/**TODO: get higher-res image */}
        </Fixed>
        </div>
        );
}
export default NiceBackground;