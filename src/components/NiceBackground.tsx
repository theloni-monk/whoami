import { Fixed } from '@primer/components'
import {useState, useLayoutEffect} from 'react'
const NiceBackground = (props: any) => {
    const [initHeight, setInitHeight] = useState(window.innerHeight);
    const[headOffset, setHeadOffset] = useState(0);
    useLayoutEffect(()=>{
        setHeadOffset(document.getElementById('head')?.clientHeight as number)
    },[headOffset])

    const blur: number = props.blur || 5;
    return (
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
            <img src={process.env.PUBLIC_URL + '/res/skyline_sharp.jpg'} alt='vegas skyline' style={{ minHeight: 300, height: '100%', margin: 0 }} />
            {/**TODO: get higher-res image */}
        </Fixed>);
}
export default NiceBackground;