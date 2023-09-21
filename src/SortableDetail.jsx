import {  useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities';
import { Skeleton } from '@mui/material';
import { useEffect, useState } from 'react';



export const SortableDetail = ({detail }) =>{

    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        const timer = setTimeout(() => {
            setLoading(false)
        }, 2000);
        return () => clearTimeout(timer)
    }, []) 
    
    const { attributes, listeners, setNodeRef, transform, transition, } = useSortable({id: detail.id});
    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    };
    return(
        <div className="imgCard" ref={setNodeRef} style={style} {...attributes} {...listeners} >
                        <div  className='imglink'>
                            {loading ? (<Skeleton animation="wave" variant="rectancular" width={300} height={300} />) : (<div className="cardImgWrap">
                    <img src={detail.link} className='img skeleton' alt="Poster" />
                    <span className='featuredImg'>{detail.feature}</span>
                    <h3 className="imgtitle">{detail.title}</h3>
                    </div>)}
                    
                        </div>
                </div>
    )
    
};
