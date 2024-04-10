import {motion} from 'framer-motion'
type MenuLinkProps = {
  id: string;
  name: string;
  active: boolean;
};
const MenuLink = ({ id, name,active }: MenuLinkProps) => {
  
  return (
      <motion.div layoutId='item'>
        <div className={`${active ? 'absolute z-70 bg-active' : 'hidden'} h-5 w-2 rounded-full`}></div>
        <a
          href={`#${id}`}
          className={`${active && 'text-active'} ? "text-active font-semibold" : ""} ml-10`}
        >
          {name}
        </a>
      </motion.div>
  );
};

export default MenuLink;
