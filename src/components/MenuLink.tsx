import React from 'react'
import { useMenuContext } from '../context/MenuContext';
import { useLocation } from 'react-router';

type MenuLinkProps = {
  id: string;
  name: string;

}
const MenuLink = ({id, name}: MenuLinkProps) => {
  const location = useLocation();
  
  return (
    <>
    <div className='mb-3'>
    <a href={`#${id}`}
    className={location.hash === `#${id}` ? 'text-primary' : ''}
    >
      {name}
    </a>
    </div>

    <hr/>
    </>

  )
}

export default MenuLink