import './features.scss'
// import { Link } from 'react-router-dom';
import { data } from '../../data'
import { useState } from 'react'
import { DndContext, closestCenter } from '@dnd-kit/core'
import { SortableContext,  verticalListSortingStrategy, arrayMove } from '@dnd-kit/sortable'
import { SortableDetail } from '../../SortableDetail'



const Featured = () => {

const [details, setDetails] = useState(data);





const onDragEnd = (event) =>{
    const {active, over} = event;
    if (active.id === over.id){
        return;
    }

    setDetails((details) => {
        const oldIndex = details.findIndex((detail) => detail.id === active.id)
        const newIndex = details.findIndex((detail) => detail.id === over.id)
        return arrayMove(details, oldIndex, newIndex);
    }) 
    
  
    
};

  return (
    <div className='featured'>


        {/* featured images */}

        <div className="featuredWrap">
                <h2 className='title'>Drag & drop favorite photos</h2>
            <div className="imgList">

            <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
            <SortableContext items={details} strategy={verticalListSortingStrategy}>

                {/* {details.map((detail) =>(
                    <SortableDetail key={detail.id} detail={detail}/>
                    ))} */}
                {details.map((detail) =>(
                    <SortableDetail key={detail.id} detail={detail}/>
                    ))}
                    </SortableContext>
                    </DndContext>
               
                    
            </div>
        </div>
      
      
    </div>
  )
}

export default Featured