import {motion} from 'framer-motion'
type MenuLinkProps = {
  id: string;
  name: string;
  active: boolean;
};
const MenuLink = ({ id, name,active }: MenuLinkProps) => {
  return (
      // <motion.div layoutId='item'>
      <div className='flex flex-col-reverse items-center justify-center w-full'>
        <div className={`${active ? ' bg-active' : 'hidden'} h-1 w-full rounded-full`}></div>
        <a
          href={`#${id}`}
          className={`w-full ${active && 'text-active'} ? "text-active font-semibold" : ""}`}
        >
          {name}
        </a>
      </div>
      // </motion.div>
  );
};

export default MenuLink;
