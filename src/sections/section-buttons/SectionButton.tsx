import React, { useState } from "react"
import { Button } from "@kenreymozo/kenrey-component"
import style from './SectionButton.module.scss';
import { ButtonList } from "./SectionButtonT";

const SectionButtons : React.FC = () => {

    const [isDestructive, setIsDestructive] = useState(false);
    const onChangeIsDestructive = () => setIsDestructive(prev => !prev);

    type Size = 'lg' | 'md' | 'sm' | 'xl';
    const [size, setSize] = useState<Size>('sm');
    const onChangeSize = (size: Size) => setSize(size);

    const onClickBaseButton = (variant: string) => {
        let raw_html = '<Button'
        if(variant !== 'primary')
            raw_html = raw_html.concat(` variant="${variant}"`)
        if(size !== 'md')
            raw_html = raw_html.concat(` size="${size}"`)
        if(isDestructive)
            raw_html = raw_html.concat(' isDestructive={true}')
        raw_html = raw_html.concat(' />')
        navigator.clipboard.writeText(raw_html)
    }

    return (
        <>
        <h2>Button</h2>
        <div className={`${style['button_row']} ${style['between']}`}>
            <Button onClick={onChangeIsDestructive} isDestructive={!isDestructive}>Set To {!isDestructive ? 'Destructive' : 'Default'}</Button>
            <div className={style['button_row']}>
                <Button onClick={()=>onChangeSize('sm')} variant={size === 'sm' ? 'primary' : 'outline'}>Small</Button>
                <Button onClick={()=>onChangeSize('md')} variant={size === 'md' ? 'primary' : 'outline'}>Medium</Button>
                <Button onClick={()=>onChangeSize('lg')} variant={size === 'lg' ? 'primary' : 'outline'}>Large</Button>
                <Button onClick={()=>onChangeSize('xl')} variant={size === 'xl' ? 'primary' : 'outline'}>X-Large</Button>
            </div>
        </div>
        <hr/>
        <div className={`${style['button_row']} ${style['center']}`}>
            {ButtonList.Variants.map((item,i ) => {
                return (
                    <Button key={item} variant={item} onClick={()=>onClickBaseButton(item)} size={size} isDestructive={isDestructive}>
                        {item.toUpperCase()}
                        </Button>)}
                )
            }
        </div>
        <hr/>
        </>
    )
}

export default SectionButtons